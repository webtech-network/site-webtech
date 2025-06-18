import SectionDescription from "@/app/components/common/SectionDescription";
import SectionTitle from "@/app/components/common/SectionTitle";
import Banner from "@/app/components/journey/levty/Banner";
import Image from "next/image";

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
        </div>
      </div>
    </>
  );
}
