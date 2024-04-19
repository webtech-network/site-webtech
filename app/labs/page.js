import Image from "next/image";
import RepoCard from "../components/RepoCard";
import Github from "../../github.js"

export default async function Labs() {
  let { data } = await Github.rest.repos.listForOrg({
    org: 'WebTech-PUC-Minas'
  });

  return (
    <div className="main-labs">
      <section className="flex flex-col items-center">
        <h1 className="title-labs text-3xl font-bold text-secundaria text-center">Principais Labs</h1>
        <div className="wrapper-cards grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-12 flex flex-col items-center">
        {
          data
          .filter((repo) => repo.name.startsWith('lab-'))
          .slice(0, 4)
          .map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          )) 
        }
)
        </div>
      </section>

      <section className="more-labs flex flex-col items-center">
        <div className="wrapper-text text-left">
          <h1 className="title-labs text-3xl font-bold text-secundaria text-center">Outros labs</h1>
          
          {
            data
            .filter((repo) => repo.name.startsWith('lab-'))
            .map((repo) => (
              <div key={repo.id}>
                <p className="text-wrap">
                  <strong className="font-bold text-primaria">{repo.name}</strong>{" "}
                  {repo.description}
                </p>
              </div>
            )) 
          }

        </div>
      </section>
    </div>
  );
}
