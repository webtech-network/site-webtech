import Github from "../github.js";
import ButtonLink from "../components/common/ButtonLink";
import SectionTitle from "../components/common/SectionTitle";
import SectionDescription from "../components/common/SectionDescription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobe, faUser, faMedal, faClock } from "@fortawesome/free-solid-svg-icons";
import TeamNavigation from "../components/common/TeamNavigation";

export const revalidate = 60;

const { GITHUB_ORG_NAME, GITHUB_MENTORS_TEAM_SLUG, GITHUB_ALUMNI_TEAM_SLUG, GITHUB_CERT_PREFIX, GITHUB_CERT_MEMBERS_1, GITHUB_CERT_MEMBERS_2, GITHUB_CERT_MEMBERS_3 } = process.env;
const getUserName = (user) => user.name ? user.name.split(' ').slice(0, 2).join(' ') : user.login;
const getUserBlogUrl = (user) => {
    if (user.blog.startsWith('http://') || user.blog.startsWith('https://')) {
        return user.blog;
    } else {
        return 'http://' + user.blog;
    }
};

function NavigationButtons({ activeFilter, totalCount, membersCount, mentorsCount, alumniCount }) {
    const buttons = [
        { id: 'all', label: 'Todos', count: totalCount, icon: faGithub },
        { id: 'members', label: 'Membros', count: membersCount, icon: faUser },
        { id: 'mentors', label: 'Mentores', count: mentorsCount, icon: faMedal },
        { id: 'alumni', label: 'Alumni', count: alumniCount, icon: faClock }
    ];

    return (
        <div className="flex justify-center gap-4 mb-8 mt-12">
            {buttons.map(button => (
                <a
                    key={button.id}
                    href={`#${button.id}`}
                    className="nav-button flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-200 bg-white hover:bg-[#f2bc0d]"
                >
                    <FontAwesomeIcon icon={button.icon} className="text-lg" />
                    <span className="font-light">{button.label}</span>
                    <span className="relative z-10 inline-flex items-center justify-center min-w-[36px] h-8 px-3 rounded-md text-sm font-semibold !bg-gray-300 !text-black shadow-sm">
                        {button.count}
                    </span>
                </a>
            ))}
        </div>
    );
}

export default async function TeamPage() {
    const teamSlugs = [GITHUB_MENTORS_TEAM_SLUG, GITHUB_ALUMNI_TEAM_SLUG, GITHUB_CERT_MEMBERS_1, GITHUB_CERT_MEMBERS_2, GITHUB_CERT_MEMBERS_3];

    const users = {
        all: [],
        current: []
    };

    const addUser = async (user, teamSlug) => {

        // ignore check for users already included for teamSlugs associated with certification teams
        if (!teamSlug.startsWith (GITHUB_CERT_PREFIX)) {
            if (users.all.includes(user.id)) return;
            users.all.push(user.id);
        }

        const response = await Github.rest.users.getByUsername({ username: user.login });
        users[teamSlug].push(response.data);

    };

    // check certification level of the user
    const isUserCertified = (user) => {
        // Check level 3 first
        if (users[process.env.GITHUB_CERT_MEMBERS_3]?.find(u => u.id === user.id)) {
            return 3;
        }
        // Check level 2
        if (users[process.env.GITHUB_CERT_MEMBERS_2]?.find(u => u.id === user.id)) {
            return 2;
        }
        // Check level 1
        if (users[process.env.GITHUB_CERT_MEMBERS_1]?.find(u => u.id === user.id)) {
            return 1;
        }
        return 0;
    }

    // Get all members of the teams
    await Promise.all(teamSlugs.map(async (teamSlug) => {
        users[teamSlug] = [];

        try {
            const response = await Github.rest.teams.listMembersInOrg({
                org: GITHUB_ORG_NAME,
                team_slug: teamSlug,
                per_page: 100,
            });

            await Promise.all(response.data.map(user => addUser(user, teamSlug)));

        } catch (error) {
            console.error(error);
        }

    }));

    // Get all current members of the organization if view_type is public
    const response = await Github.rest.orgs.listMembers({
        org: GITHUB_ORG_NAME,
        per_page: 100,
    });
    await Promise.all(response.data.map(user =>  (user.user_view_type == 'public') ? addUser(user, 'current') : null));
    

    // set certified level attribute for alumni users
    users[GITHUB_ALUMNI_TEAM_SLUG] = users[GITHUB_ALUMNI_TEAM_SLUG].map(user => ({
        ...user,
        certified: isUserCertified(user)
    }));

    // set certified level attribute for current users
    users.current = users.current.map(user => ({
        ...user,
        certified: isUserCertified(user)
    }));

    return (
        <main className="bg-[#f3f4f7] min-h-screen w-full">
        <div className="container mx-auto px-4 py-4">
            <TeamNavigation />
            <NavigationButtons 
                activeFilter="all"
                totalCount={users.current.length + users[GITHUB_MENTORS_TEAM_SLUG].length + users[GITHUB_ALUMNI_TEAM_SLUG].length}
                membersCount={users.current.length}
                mentorsCount={users[GITHUB_MENTORS_TEAM_SLUG].length}
                alumniCount={users[GITHUB_ALUMNI_TEAM_SLUG].length}
                partnersCount={0} // Adicionar quando implementar parceiros
            />

            <div id="all">
                {/* Seção de Membros Atuais */}
                {users.current.length > 0 && (
                    <div className="mb-12">
                        <SectionTitle>Membros</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {users.current.map(user => (
                                <MemberCard key={user.id} user={user} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Seção de Mentores */}
                {users[GITHUB_MENTORS_TEAM_SLUG].length > 0 && (
                    <div className="mb-12">
                        <SectionTitle>Mentores</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {users[GITHUB_MENTORS_TEAM_SLUG].map(user => (
                                <MemberCard key={user.id} user={user} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Seção de Membros Antigos */}
                {users[GITHUB_ALUMNI_TEAM_SLUG].length > 0 && (
                    <div className="mb-12">
                        <SectionTitle>Membros Antigos</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {users[GITHUB_ALUMNI_TEAM_SLUG].map(user => (
                                <MemberCard key={user.id} user={user} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Seção de Membros */}
            <div id="members" className="hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {users.current.map(user => (
                        <MemberCard key={user.id} user={user} />
                    ))}
                </div>
            </div>

            {/* Seção de Mentores */}
            <div id="mentors" className="hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {users[GITHUB_MENTORS_TEAM_SLUG].map(user => (
                        <MemberCard key={user.id} user={user} />
                    ))}
                </div>
            </div>

            {/* Seção de Alumni */}
            <div id="alumni" className="hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {users[GITHUB_ALUMNI_TEAM_SLUG].map(user => (
                        <MemberCard key={user.id} user={user} />
                    ))}
                </div>
            </div>

            {/* Seção de Parceiros (a ser implementada) */}
            <div id="partners" className="hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Adicionar parceiros quando implementado */}
                </div>
            </div>

            <section className="mb-10 mt-16">
                <SectionTitle>Participe da WebTech</SectionTitle>
                <div className="btn">
                    <ButtonLink
                        link="https://webtech.network/discord"
                        text="Entrar na comunidade do Discord"
                    />
                </div>
            </section>
        </div>
        </main>
    );
}

function TeamSection({ title, description, users }) {

    return (
        <section className="py-10 border-b-4 border-gray">
            <SectionTitle>{title}</SectionTitle>
            <SectionDescription>{description}</SectionDescription>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
    const getBadgeImage = (level) => {
        if (level === 0) return null;
        return `/badges/SVG/Badge Membro - Nivel ${level} 2025.svg`;
    };

    const getBadges = () => {
        const badges = [];
        for (let i = 1; i <= user.certified; i++) {
            badges.push(i);
        }
        return badges;
    };

    const ProfilePopup = () => (
        <div className="absolute z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 left-0 right-0 top-0 bg-white rounded-xl shadow-lg p-6 min-w-[300px]">
            <div className="flex flex-col items-center">
                <img src={user.avatar_url} className="w-32 h-32 rounded-full mb-4" />
                <h3 className="text-xl font-bold">{getUserName(user)}</h3>
                <span className="text-gray-600">@{user.login}</span>
                {user.bio && <p className="text-center mt-3 text-gray-700">{user.bio}</p>}
                
                <div className="flex gap-4 mt-4 justify-center">
                    <div className="flex flex-col items-center">
                        <span className="font-bold">{user.followers}</span>
                        <span className="text-sm text-gray-600">Seguidores</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-bold">{user.following}</span>
                        <span className="text-sm text-gray-600">Seguindo</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="font-bold">{user.public_repos}</span>
                        <span className="text-sm text-gray-600">Repos</span>
                    </div>
                </div>

                {user.certified > 0 && (
                    <div className="mt-4">
                        <div className="flex gap-3 justify-center">
                            {getBadges().map(level => (
                                <img 
                                    key={level}
                                    src={getBadgeImage(level)} 
                                    alt={`Badge Nível ${level}`}
                                    title={`Membro WebTech Certificado - Nível ${level}`}
                                    className="h-16 w-16 object-contain"
                                />
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex gap-3 mt-4">
                    <a
                        href={user.html_url}
                        target="_blank"
                        className="bg-[#24292e] text-white hover:bg-[#1b1f23] p-2 rounded-md flex items-center justify-center"
                        title="Perfil no GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-lg" />
                    </a>
                    {user.blog && (
                        <a
                            href={getUserBlogUrl(user)}
                            target="_blank"
                            className="bg-blue-600 text-white hover:bg-blue-700 p-2 rounded-md flex items-center justify-center"
                            title="Website"
                        >
                            <FontAwesomeIcon icon={faGlobe} className="text-lg" />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="group flex bg-white rounded-xl p-4 relative shadow-sm hover:shadow-md transition-all duration-300">
            {/* Avatar */}
            <img src={user.avatar_url} className="w-20 h-20 rounded-full" />

            <div className="flex flex-col flex-grow min-w-0 ml-4">
                <div className="flex-grow min-w-0">
                    {/* Nome e Username */}
                    <h3 className="font-bold text-base truncate">{getUserName(user)}</h3>
                    <span className="text-sm text-gray-600 block truncate">@{user.login}</span>

                    {/* Estatísticas */}
                    <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-600">
                        <FontAwesomeIcon icon={faUser} className="text-xs" />
                        <span className="font-bold">{user.followers}</span>
                    </div>
                </div>

                {/* Bottom Row with Badges and GitHub Button */}
                <div className="flex justify-between items-center mt-2">
                    {/* Badges */}
                    <div className="flex gap-2">
                        {user.certified > 0 && getBadges().map(level => (
                            <img 
                                key={level}
                                src={getBadgeImage(level)} 
                                alt={`Badge Nível ${level}`}
                                title={`Membro WebTech Certificado - Nível ${level}`}
                                className="h-8 w-8 object-contain"
                            />
                        ))}
                    </div>

                    {/* GitHub Button */}
                    <a
                        href={user.html_url}
                        target="_blank"
                        className="bg-[#24292e] text-white hover:bg-[#1b1f23] p-2 rounded-md flex items-center justify-center ml-2"
                        title="Perfil no GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} className="text-lg" />
                    </a>
                </div>
            </div>

            {/* Profile Popup */}
            <ProfilePopup />
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