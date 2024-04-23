import Image from "next/image";
import './style.css';
import RepoCard from "../components/RepoCard";
import Github from "../../github.js";

export default async function Labs() {
  let { data } = await Github.rest.repos.listForOrg({
    org: "WebTech-PUC-Minas",
  });

  data.sort((a, b) => b.stargazers_count - a.stargazers_count);

  const addedRepoIds = new Set();

  return (
    <div className="main-labs">
      <section className="flex flex-col items-center">
        <h1 className="title-labs text-3xl font-bold text-secundaria text-center">
          Principais Labs
        </h1>
        <div className="wrapper-cards">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 justify-center">
            {data.slice(0, 4).map((repo) => {
              if (!addedRepoIds.has(repo.id)) {
                addedRepoIds.add(repo.id);
                return <RepoCard key={repo.id} repo={repo} />;
              }
              return null;
            })}
          </div>
        </div>
      </section>

      <section className="more-labs flex flex-col items-center">
        <div className="wrapper-text text-left">
          <h1 className="title-labs text-3xl font-bold text-secundaria text-center">
            Outros labs
          </h1>

          {data.map(
            (repo) =>
              !addedRepoIds.has(repo.id) && (
                <div key={repo.id}>
                  <p className="text-wrap">
                    <strong className="font-bold text-primaria">
                      {repo.name}
                    </strong>{" "}
                    {repo.description}
                  </p>
                </div>
              )
          )}
        </div>
      </section>
    </div>
  );
}
