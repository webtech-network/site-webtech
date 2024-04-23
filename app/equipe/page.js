import Image from "next/image";
import "./style.css";
import Github from "../../github.js";
import TeamMemberRound from "../components/TeamMemberRound";
import VerticalTimeline from "../components/VerticalTimeline";
import BtnLink from "../components/BtnLink/index.js";

export default async function Equipe() {
  let { data } = await Github.rest.orgs.listMembers({
    org: "WebTech-PUC-Minas",
    role: "all",
    team_slug: "Mentores",
  });

  let users = [];

  await Promise.all(
    data.map((member) =>
      Github.rest.users.getByUsername({
        username: member.login,
      })
    )
  ).then((values) => values.forEach((value) => users.push(value.data)));

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
    <div className="flex flex-col items-center px-4 md:px-8 lg:px-16 xl:px-24">
      <section className="my-8">
        <h2 className="title-labs text-3xl font-bold text-secundaria text-center mb-4">
          Equipe Atual
        </h2>
        <p className="mb-8">
          Maxime non molestias eum pariatur voluptatibus animi hic ipsa. Placeat
          velit omnis enim soluta iure rerum sint aspernatur. Hic molestiae
          vitae sed laboriosam. Voluptate repudiandae voluptates molestias nam
          voluptatibus et qui. Ut accusamus enim omnis ad doloribus enim ut.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {users.map((user) => (
            <TeamMemberRound
              id={user.id}
              name={user.name ? user.name : user.login}
              picture={user.avatar_url}
            />
          ))}
        </div>
      </section>

      <section className="my-8">
        <h2 className="title-labs text-3xl font-bold text-secundaria text-center mb-4">
          Mentores
        </h2>
        <p className="mb-8">
          Maxime non molestias eum pariatur voluptatibus animi hic ipsa. Placeat
          velit omnis enim soluta iure rerum sint aspernatur. Hic molestiae
          vitae sed laboriosam. Voluptate repudiandae voluptates molestias nam
          voluptatibus et qui. Ut accusamus enim omnis ad doloribus enim ut.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {users.map((user) => (
            <TeamMemberRound
              id={user.id}
              name={user.name ? user.name : user.login}
              picture={user.avatar_url}
            />
          ))}
        </div>
      </section>

      <section className="my-8">
        <h2 className="title-labs text-3xl font-bold text-secundaria text-center mb-4">
          Membros Antigos
        </h2>
        <p className="mb-8">
          Maxime non molestias eum pariatur voluptatibus animi hic ipsa. Placeat
          velit omnis enim soluta iure rerum sint aspernatur. Hic molestiae
          vitae sed laboriosam. Voluptate repudiandae voluptates molestias nam
          voluptatibus et qui. Ut accusamus enim omnis ad doloribus enim ut.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {users.map((user) => (
            <TeamMemberRound
              id={user.id}
              name={user.name ? user.name : user.login}
              picture={user.avatar_url}
            />
          ))}
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
          <BtnLink href="#" text="Entre para nossa comunidade do Discord" />
        </div>
      </section>
    </div>
  );
}
