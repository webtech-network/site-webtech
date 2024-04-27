import ButtonLink from '../components/common/ButtonLink';
import SectionDescription from '../components/common/SectionDescription';
import SectionTitle from '../components/common/SectionTitle';
import Github from "../github.js";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCode } from '@fortawesome/free-solid-svg-icons';

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
        <div className="container mx-auto my-5">
            <section>
                <SectionTitle>Labs</SectionTitle>
                <SectionDescription>Todo projeto desenvolvido pelos membros da WebTech gera um ou mais labs, que são repositórios no GitHub que contam com todo o detalhamento técnico das tecnologias utilizadas e dos conhecimentos desenvolvidos.</SectionDescription>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.map((repo) => <LabCard className="card" key={repo.id} repo={repo} />)}
                </div>
            </section>
        </div>
    );
}

function LabCard({ repo }) {
    return (
        <div className="p-4 bg-gray-100 rounded-lg flex flex-col justify-between">
            <div>
                <div className="flex justify-between gap-1">
                    <h5 className="text-lg font-bold mb-2">{repo.name}</h5>
                    <div className="flex justify-end gap-1">
                        {repo.contributors.slice(0, 5).map(contributor => (
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
                <ButtonLink texto="Saiba mais" link={repo.html_url} />
            </div>
        </div>
    );
};

function LabContributor({ contributor }) {
    return (
        <a href={contributor.html_url} target="_blank">
            <img src={contributor.avatar_url} className="w-7 h-7 rounded-full" alt={contributor.login} />
        </a>
    );
}

function LabLabel({ children }) {
    return (
        <div className="bg-secundariaDark text-white text-sm py-1 px-3 rounded-2xl">{children}</div>
    );
}