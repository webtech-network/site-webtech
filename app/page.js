'use client'
import { Banner } from "./components/Banner/banner";
import CampoCard from "./components/CampoCard";
import CampoEventos from "./components/CampoEventos";
import GoogleMaps from "./components/GoogleMaps";

export default function Home() {
    return (
        <div className="">
            <header className="banner md:px-20 px-10 py-10 w-full">
                <Banner />
            </header>
            <section className="px-10 md:px-20">
                <div className="container mx-auto py-5 grid grid-cols-1 md:grid-cols-12 gap-4">
                    <div className="col-span-12 md:col-span-7">
                        <h2 className="font-bold text-center text-3xl py-5">Comunidade WebTech</h2>
                        <p className="mt-2 text-justify">
                            Um dos objetivos da WebTech é a formação de uma comunidade de desenvolvedores, designers e entusiastas de tecnologia. Para isso, promovemos eventos, cursos e workshops, além de mantermos um canal no Discord para a troca de conhecimento e experiências.
                        </p>
                        <h3 className="font-bold text-center text-2xl py-5 mt-2">Conheça nossas redes Sociais</h3>
                        <div className="flex pb-5 justify-center">
                            <div className="flex gap-3 justify-center items-center md:justify-start mt-2">
                                <a href="https://www.linkedin.com/company/webtech-puc-minas/mycompany/" target="_blank"><img className="w-7" src="./linkedinHome.png" /></a>
                                <a href="https://www.instagram.com/webtech.pucminas/" target="_blank"><img className="w-7" src="./instagramHome.png" /></a>
                                <a href="" target="_blank"><img className="w-7" src="./githubHome.png" /></a>
                                <a href="https://www.youtube.com/@Webtech.PUCMinas" target="_blank"><img className="w-7 " src="./youtubeHome.png" /></a>
                            </div>
                        </div>
                    </div>
                    <div className=" col-span-12 md:col-span-5 flex justify-center">
                        <iframe className=" iframe-border w-96 h-64 md:h-96 mt-5 md:mt-0 md:w-full lg:w-[380px]" src="https://discord.com/widget?id=1167587327376359424&theme=dark" allowtransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    </div>
                </div>
            </section>
            <div className="bg-primaria p-7 px-4 md:px-7">
                <div className="container mx-auto py-5">
                    <CampoCard />
                </div>
            </div>
            <div className="p-7 px-4 md:px-7 mt-6">
                <div className="container mx-auto py-5">
                    <CampoEventos />
                </div>
            </div>
            <GoogleMaps />
        </div>
    );
}
