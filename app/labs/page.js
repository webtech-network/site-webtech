import Image from "next/image";
import RepoCard from "../components/RepoCard";
import Github from "../github.js";

export default async function Labs() {
  let { data } = await Github.rest.repos.listForOrg({
    org: "WebTech-PUC-Minas",
  });

  data.sort((a, b) => b.stargazers_count - a.stargazers_count);

  const addedRepoIds = new Set();

  data = data.filter(repo => repo.name.startsWith('lab-'));


  return (
    <div className="px-10 md:px-[74px]">
      <div className="container mx-auto">
        <div className="main-labs">
          <section className="flex flex-col items-center">
            <h1 className="title-labs text-3xl font-bold text-secundaria text-center">
              Principais Labs
            </h1>
            <div className="grid grid-cols-2 gap-16">
              {data.slice(0, 4).map((repo) => {
                if (!addedRepoIds.has(repo.id)) {
                  addedRepoIds.add(repo.id);
                  return (
                    <RepoCard className="card" key={repo.id} repo={repo} />
                  );
                }
                return null;
              })}
            </div>
          </section>

          <section className="more-labs mb-8">
            <h1 className="title-labs text-3xl font-bold text-secundaria text-center">
              Outros labs
            </h1>

            {data.map(
              (repo) =>
                !addedRepoIds.has(repo.id) && (
                  <div key={repo.id}>
                    <a href={repo.html_url}>
                      <p className="mt-1">
                        <strong className="font-bold text-primaria">
                          {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </strong>{" "}
                        {repo.description}
                      </p>
                    </a>
                  </div>
                )
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
