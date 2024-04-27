import Map from "../components/common/Map";

function TestimonialCard({ image, name, description, text }) {
    return (
        <div className="rounded-lg bg-cinza p-8">
            <img className="h-48 w-48 object-cover rounded-full mx-auto mt-5 mb-5" src={image} alt="placeholder" />
            <p className="text-2xl text-center font-bold">{name}</p>
            <p className="text-center mb-5">{description}</p>
            <p className="text-center text-lg">&quot;{text}&quot;</p>
        </div>
    )
}

export default function AboutPage() {
    return (
        <div className="">
            <div className="container">

                <section class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
                    <div>
                        <h1 className="text-4xl mt-10 mb-7 text-center font-bold">Sobre</h1>
                        <p className="text-xl text-center">
                            A WebTech é um projeto de extensão da PUC Minas que tem como objetivo
                            gerar espaço de trabalho para que alunos e professores criem juntos
                            aplicações, ferramentas e conteúdo para interessados em criar soluções
                            e produtos digitais.
                        </p>
                    </div>
                    <div>
                        <h1 className="text-4xl mt-10 mb-7 text-center font-bold">Propósito</h1>
                        <p className="text-xl text-center">
                            O propósito da WebTech é promover a troca de conhecimento e experiência
                            entre alunos e professores, para que juntos possam criar soluções inovadoras
                            e tecnológicas para a sociedade.
                        </p>
                    </div>
                </section>

                <section className="mt-20 mb-20">
                    <h1 className="text-4xl mb-8 text-center font-bold">Conquistas</h1>
                    <div className="grid grid-cols-1 w-full gap-10 md:grid-cols-3">
                        <div className="">
                            <img className="w-full mb-5" src="/about/achievements/webtech-days.png" alt="placeholder" />
                            <p className="font-bold text-2xl mb-2">WebTech Days bombou!</p>
                            <p className="sm:text-xl text-sm">Reunimos 300 pessoas na primeira edição do WebTech Days, nosso principal evento de tecnologia.</p>
                        </div>
                        <div className="">
                            <img className="w-full mb-5" src="/about/achievements/espaco.gif" alt="placeholder" />
                            <p className="font-bold text-2xl mb-2">Espaços para chamar de nossos!</p>
                            <p className="sm:text-xl text-sm">A WebTech conta com espaços próprios nas unidades Praça da Liberdade e Coração Eucarístico da PUC Minas.</p>
                        </div>
                        <div className="">
                            <img className="w-full mb-5" src="/about/achievements/workshops.png" alt="placeholder" />
                            <p className="font-bold text-2xl mb-2">Workshops com prática de verdade!</p>
                            <p className="sm:text-xl text-sm">Mais de 100 alunos já participaram dos nossos workshops de Git, Node.js e Web-Scraping.</p>
                        </div>
                    </div>
                </section>

                <section className="mt-20 mb-20">
                    <h1 className="text-4xl mb-8 text-center font-bold">Dia a Dia</h1>
                    <div className="grid grid-cols-1 w-full gap-10 sm:grid-cols-3">
                        <div className="">
                            <img className="w-full mb-5" src="/about/day-to-day/reunioes.png" alt="placeholder" />
                            <p className="font-bold text-2xl mb-2">Encontros diários!</p>
                            <p className="sm:text-xl text-sm">A equipe da WebTech se reúne diariamente para compartilhar conhecimento e trabalhar em projetos.</p>
                        </div>
                        <div className="">
                            <img className="w-full mb-5" src="/about/day-to-day/workshops.png" alt="placeholder" />
                            <p className="font-bold text-2xl mb-2">Workshops!</p>
                            <p className="sm:text-xl text-sm">Ministramos workshops de tecnologia para os alunos e público geral.</p>
                        </div>
                        <div className="">
                            <img className="w-full mb-5" src="/about/day-to-day/labs.png" alt="placeholder" />
                            <p className="font-bold text-2xl mb-2">Criação de labs!</p>
                            <p className="sm:text-xl text-sm">Todos os projetos que criamos geram labs públicos com informações técnicas sobre o que foi desenvolvido.</p>
                        </div>
                    </div>
                </section>

                <section className="mt-20 mb-20">
                    <h1 className="text-4xl mb-8 text-center font-bold">Depoimentos</h1>
                    <div className="grid grid-cols-1 w-full gap-10 md:grid-cols-3">
                        <TestimonialCard
                            image="/about/testimonials/luca.png"
                            name="Luca Azalim"
                            description="Membro da WebTech"
                            text="Participar da WebTech me trouxe uma visão muito mais otimista sobre as possibilidades de aprendizado e contato com diferentes tecnologias dentro da universidade." />
                        <TestimonialCard
                            image="/about/testimonials/julia.png"
                            name="Julia Resende"
                            description="Membro da WebTech"
                            text="A WebTech moldou e aprimorou minhas habilidades de trabalho em equipe, me levando a me conectar e aprender com pessoas com visões diferentes das minhas." />
                        <TestimonialCard
                            image="/about/testimonials/jhonata.png"
                            name="Jhonata Dias"
                            description="Membro da WebTech"
                            text="Sou apaixonado por compartilhar conhecimento, e na WebTech consigo praticar isto diariamente, por meio dos nossos encontros e workshops." />
                    </div>
                </section>

            </div >
            <Map />
        </div>
    );
} 