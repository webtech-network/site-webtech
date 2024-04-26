import Image from "next/image";
import "./style.css";
import Github from "../github.js";
import TeamMemberRound from "../components/TeamMemberRound";
import VerticalTimeline from "../components/VerticalTimeline";
import BtnLink from "../components/BtnLink/index.js";

const { GITHUB_ORG_NAME, GITHUB_MENTORS_TEAM_SLUG, GITHUB_ALUMNI_TEAM_SLUG } = process.env;

const TIMELINE_DATA = [
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
];

export default async function Equipe() {

    const teamSlugs = [GITHUB_MENTORS_TEAM_SLUG, GITHUB_ALUMNI_TEAM_SLUG];

    const users = {
        all: [],
        current: []
    };

    const addUser = async (user, teamSlug) => {

        if (users.all.includes(user.id)) return;

        users.all.push(user.id);

        const response = await Github.rest.users.getByUsername({ username: user.login });
        const userData = response.data;

        users[teamSlug].push(
            <TeamMemberRound
                gitlink={userData.html_url}
                id={userData.id}
                name={userData.name ? userData.name.split(' ').slice(0, 2).join(' ') : userData.login}
                picture={userData.avatar_url}
            />
        );

    };

    await Promise.all(teamSlugs.map(async (teamSlug) => {

        users[teamSlug] = [];

        try {
            const response = await Github.rest.teams.listMembersInOrg({
                org: GITHUB_ORG_NAME,
                team_slug: teamSlug,
            });

            await Promise.all(response.data.map(user => addUser(user, teamSlug)));

        } catch (error) {
            console.error(error);
        }

    }));

    const response = await Github.rest.orgs.listMembers({
        org: GITHUB_ORG_NAME,
    });

    await Promise.all(response.data.map(user => addUser(user, 'current')));

    return (
        <div className="px-10 md:px-[74px] flex items-center justify-center">
            <div className="container mx-auto flex flex-col items-center px-4 md:px-8 lg:px-16 xl:px-24">
                <section className="my-8">
                    <h2 className="title-labs text-3xl font-bold text-secundaria text-center mb-4">
                        Membros
                    </h2>
                    <p className="mb-8 text-xl">
                        O quadro de membros da WebTech é composto por alunos de graduação
                        dos cursos do Instituto de Ciências Exatas e Informática da PUC Minas.
                    </p>
                    <div className="grid">{users.current}</div>
                </section>
                <section className="my-8">
                    <h2 className="title-labs text-3xl font-bold text-secundaria text-center mb-4">
                        Mentores
                    </h2>
                    <p className="mb-8 text-xl">
                        O quadro de mentores da WebTech é composto por professores e profissionais
                        do mercado que orientam os alunos em seus projetos e no desenvolvimento
                        de suas habilidades.
                    </p>
                    <div className="grid">{users[GITHUB_MENTORS_TEAM_SLUG]}</div>
                </section>
                <section className="my-8">
                    <h2 className="title-labs text-3xl font-bold text-secundaria text-center mb-4">
                        Membros Antigos
                    </h2>
                    <p className="mb-8 text-xl">
                        O quadro de membros antigos da WebTech é composto por alunos que já
                        participaram do grupo e que hoje não estão mais ativos.
                    </p>
                    <div className="grid">{users[GITHUB_ALUMNI_TEAM_SLUG]}</div>
                </section>
                <section className="">
                    <h1 className="title-labs text-3xl font-bold text-secundaria text-center">
                        Participe você também da WebTech
                    </h1>
                    <div className="btn">
                        <BtnLink
                            link="https://webtech.network/discord"
                            texto="Entre para nossa comunidade do Discord"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
