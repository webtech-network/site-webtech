import Github from "../../../github.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";

export default async function Labs() {

    let { data } = await Github.rest.repos.listForOrg({
        org: process.env.GITHUB_ORG_NAME,
    });

    data = data
        .filter(repo => repo.name.startsWith('lab-'))
        .sort((a, b) => b.updated_at > a.updated_at ? 1 : -1);

    return (
        <div>
            <h2 className="text-xl font-bold mb-5">
                <FontAwesomeIcon icon={faFlask} className="opacity-30 mr-3" />Labs
            </h2>
            {
                data.slice(0, 5).map((repo) =>
                    <a
                        key={repo.id}
                        className="block mb-1"
                        href={repo.html_url}
                        target="_blank"
                    >
                        {repo.name}
                    </a>
                )
            }
        </div>
    );

}