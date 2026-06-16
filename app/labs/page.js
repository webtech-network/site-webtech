import ButtonLink from '../components/common/ButtonLink';
import SectionDescription from '../components/common/SectionDescription';
import SectionTitle from '../components/common/SectionTitle';
import WorkshopCard from '../components/contents/WorkshopCard';
import WorkshopsCta from '../components/contents/WorkshopsCta';
import Github from "../github.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCode, faBookOpen, faUsers, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

export const dynamic = 'force-dynamic';

export default async function LabsPage() {

    let { data } = await Github.rest.repos.listForOrg({
        org: process.env.GITHUB_ORG_NAME,
    });

    await Promise.all(data.map(async repo => {
        const contributors = await Github.rest.repos.listContributors({
            owner: repo.owner.login,
            repo: repo.name,
        });

        repo.contributors = contributors.data;
    }))

    data = data
        .filter(repo => repo.name.startsWith('lab-'))
        .sort((a, b) => b.updated_at > a.updated_at ? 1 : -1);

    return (
        <div className="container mx-auto my-10">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-14">
                <div>
                    <h1 className="text-4xl md:text-5xl font-black text-secondary mb-5">Workshops & Labs</h1>
                    <p className="text-xl">
                        Acesse workshops introdutórios e projetos desenvolvidos pela comunidade da Web Tech Network para
                        aprender tecnologia de forma prática e colaborativa.
                    </p>
                </div>
                <div className="flex justify-center md:justify-end">
                    <img
                        src="/meetup/foto1.jpeg"
                        alt="Workshop da Web Tech"
                        className="w-full max-w-md rounded-3xl shadow-lg object-cover"
                    />
                </div>
            </section>

            <section className="mb-14">
                <SectionTitle className="mt-0">O que são os Workshops?</SectionTitle>
                <SectionDescription>
                    Os workshops da Web Tech Network são encontros introdutórios voltados para aprendizado prático em
                    diferentes áreas da tecnologia. Durante os encontros, os participantes têm contato com conceitos
                    fundamentais, demonstrações práticas e atividades guiadas para desenvolver conhecimentos técnicos de
                    forma acessível.
                </SectionDescription>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <WorkshopCard
                        icon={faBookOpen}
                        title="Aprendizado introdutório"
                        description="Conteúdo acessível para iniciantes."
                    />
                    <WorkshopCard
                        icon={faUsers}
                        title="Prática guiada"
                        description="Exercícios e aplicações durante o workshop."
                    />
                    <WorkshopCard
                        icon={faScrewdriverWrench}
                        title="Tecnologias atuais"
                        description="Temas relacionados ao mercado e tendências da área tech."
                    />
                </div>
            </section>

            <section className="mb-14">
                <WorkshopsCta
                    title="Acompanhe os próximos Workshops!"
                    description="Quer expandir seu conhecimento na área de desenvolvimento de software? Acompanhe nossos próximos workshops!"
                    buttonText="Visualizar Workshops"
                    buttonLink="/events"
                />
            </section>

            <section>
                <SectionTitle className="mt-0">O que são os Labs?</SectionTitle>
                <SectionDescription>
                    Os labs são repositórios no GitHub gerados a partir dos projetos desenvolvidos pelos membros da WebTech. 
                    Eles reúnem o detalhamento técnico das tecnologias utilizadas e os conhecimentos adquiridos ao longo do desenvolvimento.
                </SectionDescription>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.map((repo) => <LabCard className="card" key={repo.id} repo={repo} />)}
                </div>
            </section>
        </div>
    );
}

function LabCard({ repo }) {
    return (
        <div className="p-4 bg-gray rounded-xl flex flex-col justify-between">
            <div>
                <div className="flex justify-between gap-1">
                    <h5 className="text-lg font-bold mb-2">{repo.name}</h5>
                    <div className="flex justify-end gap-1">
                        {repo.contributors.slice(0, 3).map(contributor => (
                            <LabContributor key={contributor.id} contributor={contributor} />
                        ))}
                    </div>
                </div>
                <p>{repo.description}</p>
            </div>
            <div className="mt-5">
                <div className="flex justify-left gap-2 mb-5">
                    {repo.language && <LabLabel><FontAwesomeIcon icon={faCode} /> {repo.language}</LabLabel>}
                    {repo.stargazers_count > 0 && <LabLabel><FontAwesomeIcon icon={faStar} /> {repo.stargazers_count}</LabLabel>}
                </div>
                <ButtonLink text="Saiba mais" link={repo.html_url} />
            </div>
        </div>
    );
};

function LabContributor({ contributor }) {
    return (
        <a href={contributor.html_url} target="_blank">
            <img src={contributor.avatar_url} className="w-7 h-7 rounded-full filter hover:brightness-90" alt={contributor.login} />
        </a>
    );
}

function LabLabel({ children }) {
    return (
        <div className="bg-secondary-dark text-white text-sm py-1 px-3 rounded-xl">{children}</div>
    );
}

