import SectionDescription from "../../components/common/SectionDescription";
import SectionTitle from "../../components/common/SectionTitle";
import Banner from "../../components/journey/levty/Banner";
import TopicCard from "../../components/journey/levty/TopicCard";
import Image from "next/image";

import {
  faPenToSquare,
  faChessKnight,
  faArrowTurnUp,
  faBriefcase,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import StepCard from "../../components/journey/levty/StepCard";

export default function Levty() {
  return (
    <>
      <Banner />
      <div className="container">
        <div className="md:pt-0 pt-0 text-secondary-dark">
          <section className="flex flex-col md:flex-row gap-8 py-8 items-center">
            <div className="w-full md:w-3/5">
              <SectionTitle>O que é o Journey Backend?</SectionTitle>
              <SectionDescription>
                O <b>Journey Backend</b> é um programa prático de capacitação,
                onde você aprende construindo{" "}
                <b>
                  projetos reais, desenvolvendo APIs, bancos de dados e sistemas
                  seguros
                </b>
                . É uma iniciativa da <b>WebTech Network</b> em parceria com a{" "}
                <b>LEVTY</b>, focada na formação de talentos para o mercado de
                tecnologia.
              </SectionDescription>
              <SectionDescription>
                O Journey tem como objetivo <b>capacitar alunos</b> para{" "}
                <b>portunidades reais no mercado</b>. Durante o processo, você
                será desafiado a resolver problemas e construir soluções
                completas. É a chance de aprender, se desenvolver e já iniciar
                sua carreira na prática.
              </SectionDescription>
            </div>

            <div className="flex-1 relative">
              <Image
                src="/journey/levty/foto_wl.png"
                alt="Turma Journey Backend"
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
          </section>

          <section className="flex flex-col gap-9 py-8 items-center">
            <div className="w-full flex justify-start">
              <SectionTitle>Como funciona na prática?</SectionTitle>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <TopicCard
                icon={faPenToSquare}
                title="Inscrição e Seleção"
                description="Participe do processo e garanta sua vaga na jornada."
              />
              <TopicCard
                icon={faChessKnight}
                title="Desafios Práticos"
                description="Aprenda por meio de tarefas baseadas em problemas."
              />
              <TopicCard
                icon={faArrowTrendUp}
                title="Evolução e Feedback"
                description="Suporte de profissionais e correção automática."
              />
              <TopicCard
                icon={faBriefcase}
                title="Certificação e Contratação"
                description="Conquiste seu certificado e esteja mais preparada para o processo seletivo da LEVTY."
              />
            </div>
          </section>

          <section className="flex flex-col gap-9 py-8 items-center">
            <div className="w-full flex justify-start">
              <SectionTitle>Como funciona na prática?</SectionTitle>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <StepCard
                badge="Início: 07/Julho"
                badgeColor="yellow"
                title="1º Fundamentos de Back-end"
                description="Aprenda a criar servidores, gerar páginas HTML e processar formulários com Node.js e Express."
              />
              <StepCard
                title="2º API: REST + CRUD em Memória"
                description="Desenvolva APIs completas com rotas REST, tratamento de erros e documentação."
              />
              <StepCard
                title="3º Banco de Dados PostgreSQL"
                description="Integre sua API a um banco real, utilizando migrations, seeds e boas práticas."
              />
              <StepCard
                badge="Final: 28/Agosto"
                badgeColor="blue"
                title="4º Segurança e Autenticação"
                description="Implemente autenticação segura com hashing de senhas e tokens JWT."
              />
            </div>
          </section>
        </div>
      </div>

      <section className="relative w-full py-20 mt-8">
        <Image
          src="/journey/levty/bg_footer.png"
          alt="Fundo azul com detalhes"
          fill
          className="object-cover -z-10"
        />

        <div className="container flex flex-col items-center justify-center gap-8">
          <h2 className="text-3xl md:text-4xl text-white font-black text-center">
            Pronto para começar sua jornada?
          </h2>

          <p className="text-white max-w-2xl text-center text-base md:text-lg leading-relaxed">
            Se você quer mais que um curso, quer uma oportunidade real de se
            destacar no mercado e, quem sabe, garantir uma vaga na LEVTY, então
            essa jornada é pra você. <br />
            <span className="font-bold">
              Garanta sua vaga agora. Inscreva-se no Sympla e comece a construir
              sua carreira no back-end!
            </span>
          </p>

          <a
            href="https://www.sympla.com.br/evento-online/journey-backend/3002580"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0096D5] px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
          >
            Garantir minha vaga →
          </a>

          <Image
            src="/journey/levty/webtech_levty.svg"
            alt="Logos LEVTY e WebTech Network"
            width={320}
            height={80}
            className="mt-6 w-60 md:w-80 h-auto"
          />
        </div>
      </section>
    </>
  );
}
