import GoogleMaps from "../components/GoogleMaps";

function Depoimento({ image, name, description, text }) {
    return (
        <div className="rounded-lg bg-cinza p-8">
            <img className="h-48 w-48 object-cover rounded-full mx-auto mt-5 mb-5" src={image} alt="placeholder" />
            <p className="text-2xl text-center">{name}</p>
            <p className="text-center mb-5">{description}</p>
            <p className="text-center">&quot;{text}&quot;</p>
        </div>
    )
}

export default function AboutPage() {
    return (
        <main className="">
            <div className="px-10 md:px-20 container mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="">
                        <h1 className="text-4xl mt-10 mb-7 text-center font-bold">Sobre</h1>
                        <p className="text-xl">
                            A WebTech é um projeto de extensão da PUC Minas que tem como objetivo
                            gerar espaço de trabalho para que alunos e professores criem juntos
                            aplicações, ferramentas e conteúdo para interessados em criar soluções
                            e produtos digitais.
                        </p>
                    </div>
                    <div className="">
                        <h1 className="text-4xl mt-10 mb-7 text-center font-bold">Propósito</h1>
                        <p className="text-xl">
                            O propósito da WebTech é promover a troca de conhecimento e experiência
                            entre alunos e professores, para que juntos possam criar soluções inovadoras
                            e tecnológicas para a sociedade.
                        </p>
                    </div>
                </div>
                <h1 className="text-4xl mt-10 mb-7 text-center font-bold">Conquistas</h1>
                <div className="max-w-screen-2xl m-auto text-secundariaDark	">
                    <div className="pb-20">
                        <div className="grid grid-cols-1 w-full gap-10 md:grid-cols-3">
                            <div className="">
                                <img className="w-full mb-5" src="/sobre/conquistas/webtech-days.png" alt="placeholder" />
                                <p className="font-bold text-2xl mb-2">WebTech Days bombou!</p>
                                <p className="sm:text-xl text-sm">Reunimos 300 pessoas na primeira edição do WebTech Days, nosso principal evento de tecnologia.</p>
                            </div>
                            <div className="">
                                <img className="w-full mb-5" src="/sobre/conquistas/espaco.gif" alt="placeholder" />
                                <p className="font-bold text-2xl mb-2">Espaços para chamar de nossos!</p>
                                <p className="sm:text-xl text-sm">A WebTech conta com espaços próprios nas unidades Praça da Liberdade e Coração Eucarístico da PUC Minas.</p>
                            </div>
                            <div className="">
                                <img className="w-full mb-5" src="/sobre/conquistas/workshops.png" alt="placeholder" />
                                <p className="font-bold text-2xl mb-2">Workshops com prática de verdade!</p>
                                <p className="sm:text-xl text-sm">Mais de 100 alunos já participaram dos nossos workshops de Git, Node.js e Web-Scraping.</p>
                            </div>
                        </div>
                    </div>

                    <div className="sm:pb-20 pb-10">
                        <h1 className="text-center sm:text-4xl sm:pb-16 pb-5 font-bold">Dia a dia</h1>
                        <div className="grid grid-cols-1 w-full gap-10 sm:grid-cols-3">
                            <div className="">
                                <img className="w-full mb-5" src="/sobre/dia-a-dia/reunioes.png" alt="placeholder" />
                                <p className="font-bold text-2xl mb-2">Encontros diários!</p>
                                <p className="sm:text-xl text-sm">A equipe da WebTech se reúne diariamente para compartilhar conhecimento e trabalhar em projetos.</p>
                            </div>
                            <div className="">
                                <img className="w-full mb-5" src="/sobre/dia-a-dia/workshops.png" alt="placeholder" />
                                <p className="font-bold text-2xl mb-2">Workshops!</p>
                                <p className="sm:text-xl text-sm">Ministramos workshops de tecnologia para os alunos e público geral.</p>
                            </div>
                            <div className="">
                                <img className="w-full mb-5" src="/sobre/dia-a-dia/labs.png" alt="placeholder" />
                                <p className="font-bold text-2xl mb-2">Criação de labs!</p>
                                <p className="sm:text-xl text-sm">Todos os projetos que criamos geram labs públicos com informações técnicas sobre o que foi desenvolvido.</p>
                            </div>
                        </div>
                    </div>
                    <div className="sm:block hidden pb-20">
                        <h1 className="text-center sm:text-4xl sm:pb-16 pb-5 font-bold">Depoimentos</h1>
                        <div className="grid grid-cols-1 w-full gap-10 md:grid-cols-3">
                            <Depoimento
                                image="/sobre/depoimentos/luca.png"
                                name="Luca Azalim"
                                description="Membro da WebTech"
                                text="Participar da WebTech me trouxe uma visão muito mais otimista sobre as possibilidades de aprendizado e contato com diferentes tecnologias dentro da universidade." />
                            <Depoimento
                                image="/sobre/depoimentos/julia.png"
                                name="Julia Resende"
                                description="Membro da WebTech"
                                text="A WebTech moldou e aprimorou minhas habilidades de trabalho em equipe, me levando a me conectar e aprender com pessoas com visões diferentes das minhas." />
                            <Depoimento
                                image="/sobre/depoimentos/jhonata.png"
                                name="Jhonata Dias"
                                description="Membro da WebTech"
                                text="Sou apaixonado por compartilhar conhecimento, e na WebTech consigo praticar isto diariamente, por meio dos nossos encontros e workshops." />
                        </div>
                    </div>
                </div>
            </div >
            <GoogleMaps />
        </main>
    );
} 