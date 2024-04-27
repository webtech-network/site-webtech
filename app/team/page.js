import Github from "../github.js";
import ButtonLink from "../components/common/ButtonLink.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";

const { GITHUB_ORG_NAME, GITHUB_MENTORS_TEAM_SLUG, GITHUB_ALUMNI_TEAM_SLUG } = process.env;
const getUserName = (user) => user.name ? user.name.split(' ').slice(0, 2).join(' ') : user.login;
const getUserBlogUrl = (user) => {
    if (user.blog.startsWith('http://') || user.blog.startsWith('https://')) {
        return user.blog;
    } else {
        return 'http://' + user.blog;
    }
};

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

export default async function TeamPage() {

    const teamSlugs = [GITHUB_MENTORS_TEAM_SLUG, GITHUB_ALUMNI_TEAM_SLUG];

    const users = {
        all: [],
        current: []
    };

    const addUser = async (user, teamSlug) => {

        if (users.all.includes(user.id)) return;

        users.all.push(user.id);

        const response = await Github.rest.users.getByUsername({ username: user.login });
        users[teamSlug].push(response.data);

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
            <div className="container mx-auto items-center px-4 md:px-8 lg:px-16 xl:px-24">
                <TeamSection
                    title="Membros"
                    description="O quadro de membros da WebTech é composto por alunos de graduação
                        dos cursos do Instituto de Ciências Exatas e Informática da PUC Minas."
                    users={users.current}
                />
                <TeamSection
                    title="Mentores"
                    description="O quadro de mentores da WebTech é composto por professores e profissionais
                        do mercado que orientam os alunos em seus projetos e no desenvolvimento
                        de suas habilidades."
                    users={users[GITHUB_MENTORS_TEAM_SLUG]}
                />
                <TeamSection
                    title="Membros Antigos"
                    description="O quadro de membros antigos da WebTech é composto por alunos que já
                        participaram do grupo e que hoje não estão mais ativos."
                    users={users[GITHUB_ALUMNI_TEAM_SLUG]}
                />
                <section className="mb-10">
                    <h1 className="title-labs text-3xl font-bold text-secundaria text-center">
                        Participe da WebTech
                    </h1>
                    <div className="btn">
                        <ButtonLink
                            link="https://webtech.network/discord"
                            texto="Entrar na comunidade do Discord"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

function TeamSection({ title, description, users }) {

    return (
        <section className="py-10 border-b-4 border-gray-200">
            <h2 className="text-3xl font-bold text-secundaria text-center mb-4">
                {title}
            </h2>
            <p className="mb-8 text-xl text-center">
                {description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {users
                    .sort((u1, u2) => {

                        if (u1.bio && !u2.bio) {
                            return -1;
                        }

                        if (!u1.bio && u2.bio) {
                            return 1;
                        }

                        const name1 = getUserName(u1);
                        const name2 = getUserName(u2);

                        if (name1 < name2) {
                            return -1;
                        }

                        if (name1 > name2) {
                            return 1;
                        }

                        return 0;

                    })
                    .map(user => <MemberCard key={user.id} user={user} />)
                }
            </div>
        </section>
    );

}

function MemberCard({ user }) {

    return (
        <div className="flex flex-col items-center m-2 p-5">
            <img src={user.avatar_url} className="w-40 h-40 rounded-full mb-5" />
            <p className="text-center text-2xl font-bold">{getUserName(user)}</p>
            <p className="text-center text-md">{user.bio}</p>
            <div className="flex gap-3">
                <SocialButton href={user.html_url} icon={faGithub} />
                {user.twitter_username && <SocialButton href={"https://x.com/" + user.twitter_username} icon={faXTwitter} />}
                {user.email && <SocialButton href={"mailto:" + user.email} icon={faEnvelope} />}
                {user.blog && <SocialButton href={getUserBlogUrl(user)} icon={faGlobe} />}
            </div>
        </div>
    );
};

function SocialButton({ href, icon }) {
    return (
        <a
            href={href}
            target="_blank"
            className="mt-5 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow">
            <FontAwesomeIcon
                icon={icon}
                className="text-xl" />
        </a>
    );
}