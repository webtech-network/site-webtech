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
        <div className="grid-cards">
          {data.slice(0, 4).map((repo) => {
            if (!addedRepoIds.has(repo.id)) {
              addedRepoIds.add(repo.id);
              return <RepoCard className="card" key={repo.id} repo={repo} />;
            }
            return null;
          })}
        </div>
      </section>

      <section className="more-labs">

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

      </section>
    </div>
  );
}
