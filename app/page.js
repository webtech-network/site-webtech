import PartnersSection from "./components/home/PartnersSection";
import EventsSection from "./components/home/EventsSection";
import Map from "./components/common/Map";
import Banner from "./components/home/Banner";
import SectionTitle from "./components/common/SectionTitle";
import SectionDescription from "./components/common/SectionDescription";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
    return (
        <div className="">
            <header className="banner md:px-20 px-10 py-10 w-full">
                <Banner />
            </header>
            <section className="px-10 md:px-20">
                <div className="container mx-auto py-5 grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-7">
                        <SectionTitle>Comunidade WebTech</SectionTitle>
                        <SectionDescription>
                            Um dos objetivos da WebTech é a formação de uma comunidade de desenvolvedores,
                            designers e entusiastas de tecnologia. Para isso, promovemos eventos, cursos e workshops,
                            além de mantermos um canal no Discord para a troca de conhecimento e experiências.
                        </SectionDescription>
                        <h3 className="font-bold text-center text-2xl py-5 mt-2">Acompanhe-nos nas redes!</h3>
                        <div className="flex pb-5 justify-center">
                            <div className="flex gap-3 justify-center items-center md:justify-start mt-2 text-primaria">

                                <a href="https://www.linkedin.com/company/webtech-puc-minas/mycompany/" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-4xl" />
                                </a>

                                <a href="https://www.instagram.com/webtech.pucminas/" target="_blank">
                                    <FontAwesomeIcon icon={faInstagram} className="text-4xl" />
                                </a>

                                <a href="https://github.com/WebTech-PUC-Minas" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} className="text-4xl" />
                                </a>

                                <a href="https://www.youtube.com/@Webtech.PUCMinas" target="_blank">
                                    <FontAwesomeIcon icon={faYoutube} className="text-4xl" />
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-5 flex justify-center">
                        <iframe className="w-96 h-64 md:h-96 mt-5 md:mt-0 md:w-full lg:w-[380px]" src="https://discord.com/widget?id=1167587327376359424&theme=dark" allowtransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    </div>
                </div>
            </section>
            <div className="bg-primaria p-7 px-4 md:px-7">
                <div className="container mx-auto py-5">
                    <PartnersSection />
                </div>
            </div>
            <div className="container mx-auto mb-10">
                <EventsSection />
            </div>
            <Map />
        </div>
    );
}
