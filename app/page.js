import PartnersSection from "./components/home/PartnersSection";
import EventsSection from "./components/home/EventsSection";
import Map from "./components/common/Map";
import Banner from "./components/home/Banner";
import SectionTitle from "./components/common/SectionTitle";
import SectionDescription from "./components/common/SectionDescription";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import ButtonLink from "./components/common/ButtonLink";

export default function Home() {
    return (
        <div className="">
            <header className="banner md:px-20 px-10 py-10 w-full">
                <Banner />
            </header>
            <section className="px-10 md:px-20">
                <div className="container py-5 grid grid-cols-1 md:grid-cols-12 gap-10">
                    <div className="col-span-12 lg:col-span-7">
                        <div className="flex flex-col items-center">
                            <SectionTitle>WebTech Community</SectionTitle>
                            <SectionDescription>
                                Um dos objetivos da WebTech é a formação de uma comunidade de desenvolvedores,
                                designers e entusiastas de tecnologia. Para isso, promovemos eventos, cursos e workshops,
                                além de mantermos um canal no Discord para a troca de conhecimento e experiências.
                            </SectionDescription>
                            <div className="mt-5">
                                <a
                                    href="/discord"
                                    target="_blank"
                                    className="rounded-2xl transition-colors duration-300 bg-secondary hover:bg-secondary-light text-white border-secondary border-2 p-4"
                                >
                                    <FontAwesomeIcon icon={faGlobe} className="text-xl mr-2" />
                                    <span className="font-bold">Faça parte da nossa comunidade</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-5 flex justify-center md:justify-end">
                        <iframe className="w-96 h-64 md:h-96 mt-5 md:mt-0 md:w-full lg:w-[380px]" src="https://discord.com/widget?id=1167587327376359424&theme=dark" allowtransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    </div>
                </div>
            </section>
            <section className="bg-primary pb-10">
                <div className="container mx-auto py-5">
                    <PartnersSection />
                </div>
            </section>
            <section className="container mx-auto mb-10">
                <EventsSection />
            </section>
            <Map />
        </div>
    );
}
