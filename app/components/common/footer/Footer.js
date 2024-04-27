import Eventos from "./Events";
import RedesSociais from "./Socials";
import Unidades from "./Units";
import Github from "../../../github.js";

export default async function Footer() {

    let { data } = await Github.rest.repos.listForOrg({
        org: process.env.GITHUB_ORG_NAME,
    });

    data.sort((a, b) => b.stargazers_count - a.stargazers_count);
    data = data.filter(repo => repo.name.startsWith('lab-'));

    return (

        <footer className="bg-secundariaDark text-white ">
            <div className="py-10 px-4 md:px-7">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-3">


                        <div className="text-center md:text-start">
                            <h2 className="text-xl font-bold">Labs</h2>
                            {
                                data.slice(0, 4).map((data) => {
                                    return (
                                        <a key={data.id} className="block" href={data.html_url}>{data.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</a>

                                    );
                                })
                            }
                        </div>


                        <div className="text-center md:text-start">
                            <Unidades />
                        </div>

                        <div className="text-center md:text-start">
                            <RedesSociais />
                        </div>


                    </div>
                </div>
            </div>

            <div className="bg-secundaria h-10 flex items-center justify-center">
                <p> &#169; WebTech - PUC Minas</p>
            </div>
        </footer>

    );
}
