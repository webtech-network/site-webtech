import Image from "next/image";
import "./style.css";
import Github from "../../github.js";
import TeamMemberRound from "../components/TeamMemberRound";
import VerticalTimeline from "../components/VerticalTimeline";
import BtnLink from "../components/BtnLink/index.js";

const { GITHUB_ORG_NAME, GITHUB_MENTORS_TEAM_SLUG, GITHUB_ALUMNI_TEAM_SLUG } = process.env;

export default async function Equipe() {

    const teamSlugs = [GITHUB_MENTORS_TEAM_SLUG, GITHUB_ALUMNI_TEAM_SLUG];

    const users = {
        current: []
    };

    const addUser = (user, teamSlug) => {
        users[teamSlug].push({
            id: user.id,
            name: user.name ? user.name : user.login,
            avatar_url: user.avatar_url,
            html_url: user.html_url,
            teams: [teamSlug]
        });
    }

    teamSlugs.forEach(async (teamSlug) => {

        users[teamSlug] = [];

        await Github.rest.teams.listMembersInOrg({
            org: GITHUB_ORG_NAME,
            team_slug: teamSlug,
        })
            .then((response) => response.data.forEach((user) => addUser(user, teamSlug)))
            .catch((error) => console.error(error));

    });

    await Github.rest.orgs.listMembers({
        org: GITHUB_ORG_NAME,
    }).then((response) => response.data.forEach((user) => {

        for (let teamSlug of teamSlugs) {
            if (users[teamSlug].includes(user)) return;
        }

        addUser(user, "current")

    }));

    console.log(users);

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
            <div className="container">
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
                            {users.current.map((user) => (
                                <TeamMemberRound
                                    gitlink={user.html_url}
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
                            Maxime non molestias eum pariatur voluptatibus animi hic ipsa.
                            Placeat velit omnis enim soluta iure rerum sint aspernatur. Hic
                            molestiae vitae sed laboriosam. Voluptate repudiandae voluptates
                            molestias nam voluptatibus et qui. Ut accusamus enim omnis ad
                            doloribus enim ut.
                        </p>
                        <div className="grid">
                            {users[GITHUB_MENTORS_TEAM_SLUG].map((user) => (
                                <TeamMemberRound
                                    gitlink={user.html_url}
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
                            Maxime non molestias eum pariatur voluptatibus animi hic ipsa.
                            Placeat velit omnis enim soluta iure rerum sint aspernatur. Hic
                            molestiae vitae sed laboriosam. Voluptate repudiandae voluptates
                            molestias nam voluptatibus et qui. Ut accusamus enim omnis ad
                            doloribus enim ut.
                        </p>
                        <div className="grid">
                            {users[GITHUB_ALUMNI_TEAM_SLUG].map((user) => (
                                <TeamMemberRound
                                    gitlink={user.html_url}
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
