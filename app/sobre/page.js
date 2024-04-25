function Depoimento({ image, name, description, text }) {
  return (
    <div className="rounded-lg bg-cinza p-8">
      <img className="h-48 w-48 object-cover rounded-full mx-auto mt-5 mb-5" src={image} alt="placeholder" />
      <p className="text-2xl text-center">{name}</p>
      <p className="text-center mb-5">{description}</p>
      <p className="text-center">"{text}"</p>
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="px-10 md:px-20">
      <div className="container mx-auto">
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
            <div className="grid grid-cols-1 w-full gap-10 md:grid-cols-4">
              <div className="">
                <img className="w-full mb-5" src="https://via.placeholder.com/300x250" alt="placeholder" />
                <p className="sm:text-xl text-sm font-bold">Site da Pós em Tecnologias Digitais da PUC Minas</p>
              </div>
              <div className="">
                <img className="w-full mb-5" src="https://via.placeholder.com/300x250" alt="placeholder" />
                <p className="sm:text-xl text-sm font-bold">Evento WebTech Days - JavaScript Edition</p>
              </div>
              <div className="">
                <img className="w-full mb-5" src="https://via.placeholder.com/300x250" alt="placeholder" />
                <p className="sm:text-xl text-sm font-bold">Workshops bem recebidos pela comunidade acadêmica</p>
              </div>
              <div className="">
                <img className="w-full mb-5" src="https://via.placeholder.com/300x250" alt="placeholder" />
                <p className="sm:text-xl text-sm font-bold">Labs públicos que reúnem o conhecimento adquirido nos projetos</p>
              </div>
            </div>
          </div>

          <div className="sm:pb-20 pb-10">
            <h1 className="text-center sm:text-4xl sm:pb-16 pb-5 font-bold">Nosso dia a dia</h1>
            <div className="grid grid-cols-1 w-full gap-10 sm:grid-cols-3">
              <div className="">
                <img className="w-full mb-5" src="https://via.placeholder.com/400x250" alt="placeholder" />
                <p className="sm:text-xl text-sm font-bold">Semanalmente, nos reunimos nos espaços da WebTech nos campi Praça da Liberdade e Coração Eucarístico</p>
              </div>
              <div className="">
                <img className="w-full mb-5" src="https://via.placeholder.com/400x250" alt="placeholder" />
                <p className="sm:text-xl text-sm font-bold">A WebTech frequentemente organiza workshops e outros eventos para a comunidade</p>
              </div>
              <div className="">
                <img className="w-full mb-5" src="https://via.placeholder.com/400x250" alt="placeholder" />
                <p className="sm:text-xl text-sm font-bold">Estamos sempre conectados com as empresas do mercado de tecnologia e com outros potenciais parceiros</p>
              </div>
            </div>
          </div>
          <div className="sm:block hidden pb-20">
            <h1 className="text-center sm:text-4xl sm:pb-16 pb-5 font-bold">Depoimentos</h1>
            <div className="grid grid-cols-1 w-full gap-10 md:grid-cols-3">
              <Depoimento
                image="/sobre/depoimentos/Luca.png"
                name="Luca Azalim"
                description="Membro da WebTech"
                text="Participar da WebTech me trouxe uma visão muito mais otimista sobre as possibilidades de aprendizado e contato com diferentes tecnologias dentro da universidade." />
              <Depoimento
                image="/sobre/depoimentos/Luca.png"
                name="Luca Azalim"
                description="Membro da WebTech"
                text="Participar da WebTech me trouxe uma visão muito mais otimista sobre as possibilidades de aprendizado e contato com diferentes tecnologias dentro da universidade." />
              <Depoimento
                image="/sobre/depoimentos/Luca.png"
                name="Luca Azalim"
                description="Membro da WebTech"
                text="Participar da WebTech me trouxe uma visão muito mais otimista sobre as possibilidades de aprendizado e contato com diferentes tecnologias dentro da universidade." />
            </div>
          </div>
        </div>
      </div >
    </main>
  );
} 