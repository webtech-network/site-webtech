import Image from "next/image";
import "./style.css";
import Github from "../../github.js";
import TeamMemberRound from "../components/TeamMemberRound";
import VerticalTimeline from "../components/VerticalTimeline";
import BtnLink from "../components/BtnLink/index.js";

export default async function Equipe() {
  const equipes = {};
  const users = {};

  // pegar todos os usuários da organização e inserir o username e o link do avata e link do github no objeto users
  await Github.request("/orgs/WebTech-PUC-Minas/members", {
    org: "WebTech-PUC-Minas",
  })
    .then((response) => {
      response.data.forEach((user) => {
        users[user.login] = {
          id: user.id,
          name: user.name ? user.name : user.login,
          avatar_url: user.avatar_url,
          html_url: user.html_url,
          teams: []
        };
      });
    })
    .catch((error) => {
      console.error("Erro ao obter os membros da organização:", error);
    });

  // pegar todos os times da organização e inserir o id e o nome do time no objeto equipes
  Github.request("/orgs/WebTech-PUC-Minas/teams", {
    org: "WebTech-PUC-Minas",
  })
    .then((response) => {
      response.data.forEach((team) => {
        equipes[team.id] = team.name;
      });
    })
    .catch((error) => {
      console.error("Erro ao obter os times da organização:", error);
    });

  // para cada time verificar se os usuários são membros e adicionar o time no array de usuários


  const timelineData = [
    {
      imageName: "milestone-1",
      description: "Descrição do Evento 1",
      image: "../../img-1.png",
    },
    {
      imageName: "milestone-2",
      description: "Descrição do Evento 2",
      image: "../../img-2.png",
    },
    {
      imageName: "milestone-3",
      description: "Descrição do Evento 3",
      image: "../../img-3.png",
    },
    {
      imageName: "milestone-4",
      description: "Descrição do Evento 4",
      image: "../../img-4.png",
    },
    // etc.
  ];

  return (
    <div className="px-4 md:px-7">
      <div className="Container">
        <div className="flex flex-col items-center px-4 md:px-8 lg:px-16 xl:px-24">
          <section className="my-8">
            <h2 className="title-labs text-3xl font-bold text-secundaria text-center mb-4">
              Equipe Atual
            </h2>
            <p className="mb-8">
              Maxime non molestias eum pariatur voluptatibus animi hic ipsa.
              Placeat velit omnis enim soluta iure rerum sint aspernatur. Hic
              molestiae vitae sed laboriosam. Voluptate repudiandae voluptates
              molestias nam voluptatibus et qui. Ut accusamus enim omnis ad
              doloribus enim ut.
            </p>
            <div className="grid">
              {/* {users.map((user) => (
                <TeamMemberRound
                  gitlink={user.html_url}
                  id={user.id}
                  name={user.name ? user.name : user.login}
                  picture={user.avatar_url}
                />
              ))} */}
            </div>
          </section>
          <section className="my-8">
            <h2 className="title-labs text-3xl font-bold text-secundaria text-center mb-4">
              Mentores
            </h2>
            <p className="mb-8">
              Maxime non molestias eum pariatur voluptatibus animi hic ipsa.
              Placeat velit omnis enim soluta iure rerum sint aspernatur. Hic
              molestiae vitae sed laboriosam. Voluptate repudiandae voluptates
              molestias nam voluptatibus et qui. Ut accusamus enim omnis ad
              doloribus enim ut.
            </p>
            <div className="grid">
              {/* {users.map((user) => (
                <TeamMemberRound
                  gitlink={user.html_url}
                  id={user.id}
                  name={user.name ? user.name : user.login}
                  picture={user.avatar_url}
                />
              ))} */}
            </div>
          </section>
          <section className="my-8">
            <h2 className="title-labs text-3xl font-bold text-secundaria text-center mb-4">
              Membros Antigos
            </h2>
            <p className="mb-8">
              Maxime non molestias eum pariatur voluptatibus animi hic ipsa.
              Placeat velit omnis enim soluta iure rerum sint aspernatur. Hic
              molestiae vitae sed laboriosam. Voluptate repudiandae voluptates
              molestias nam voluptatibus et qui. Ut accusamus enim omnis ad
              doloribus enim ut.
            </p>
            <div className="grid">
              {/* {users.map((user) => (
                <TeamMemberRound
                  gitlink={user.html_url}
                  id={user.id}
                  name={user.name ? user.name : user.login}
                  picture={user.avatar_url}
                />
              ))} */}
            </div>
          </section>
          <section className="">
            <h2 className="title-labs text-3xl font-bold text-secundaria text-center">
              Conheça a nossa jornada
            </h2>
            <div>
              <VerticalTimeline items={timelineData} />
            </div>
            <h1 className="title-labs text-3xl font-bold text-secundaria text-center">
              Seja você também um WebTecher
            </h1>
            <div className="btn">
              <BtnLink
                link="https://discord.com/invite/P85CYQ6U"
                texto="Entre para nossa comunidade do Discord"
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
