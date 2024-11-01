import ButtonLink from "../components/common/ButtonLink";
import SectionTitle from "../components/common/SectionTitle";
import SectionDescription from "../components/common/SectionDescription";
import PartnersSection from "../components/home/PartnersSection";
import InfoSection from "../components/common/InfoSection";
import { faScrewdriverWrench, faBookOpenReader, faUsers, faPersonHiking, faHandshake } from "@fortawesome/free-solid-svg-icons";


// Dados dos cards
const cardData = [
    {
      icon: faScrewdriverWrench,
      title: "Desenvolvimento de Competências",
      shortDescription: "Ensino baseado em competências.",
      fullDescription: "<p class='mb-4 text-justify'>Este pilar se concentra no fortalecimento das habilidades técnicas e comportamentais dos participantes. No setor de tecnologia da informação, isso inclui desde o aprimoramento de conhecimentos em programação e uso de ferramentas até o desenvolvimento de habilidades analíticas e de resolução de problemas.</p><p class='mb-4 text-justify'> A proposta é oferecer uma base sólida de habilidades técnicas essenciais, como cloud computing, cibersegurança, inteligência artificial e análise de dados, enquanto também promove soft skills importantes, como colaboração, comunicação e adaptabilidade. O desenvolvimento de competências no treinamento ocorre por meio de workshops práticos, exercícios aplicados e desafios interativos que refletem as demandas reais do mercado.</p>"
    },
    {
      icon: faBookOpenReader,
      title: "Curadoria de Conteúdo",
      shortDescription: "Colaboração na criação de conteúdo.",
      fullDescription: "<p class='mb-4 text-justify'>A curadoria de conteúdo garante que os materiais de estudo e as atividades oferecidas sejam relevantes, atualizados e alinhados com as melhores práticas do mercado. Isso significa selecionar conteúdos que acompanhem as inovações da área, oferecendo desde tutoriais de novas ferramentas até estudos de caso sobre tendências atuais, como IoT, blockchain e data science.</p><p class='mb-4 text-justify'>Esse pilar visa reduzir a sobrecarga de informação ao organizar e priorizar conteúdos que desenvolvem o pensamento crítico, a tomada de decisões baseada em dados e a especialização técnica. Com isso, os participantes têm acesso a uma experiência de aprendizado direcionada, com recursos confiáveis e de qualidade, que enriquecem a jornada de aprendizado.</p>"
    },
    {
      icon: faUsers,
      title: "Socialização e Pertencimento",
      shortDescription: "Ambiente de socialização.",
      fullDescription: "<p class='mb-4 text-justify'>Esse pilar foca na construção de um ambiente inclusivo e colaborativo, onde todos os participantes se sintam valorizados e parte de uma comunidade de aprendizado. No campo da TI, onde o trabalho em equipe e a troca de conhecimentos são fundamentais, é essencial fomentar um ambiente de pertencimento que promova a troca de experiências, a formação de redes de contato e o aprendizado entre pares.</p><p class='mb-4 text-justify'>Isso é feito por meio de encontros (meetups), fóruns de discussão, mentorias e espaços onde os participantes possam colaborar em projetos e resolver problemas juntos.</p><p class='mb-4 text-justify'>A socialização no treinamento facilita a integração de diferentes perspectivas, criando um ambiente de apoio onde a diversidade de ideias é celebrada e o desenvolvimento coletivo é impulsionado.</p>"
    },
    {
      icon: faPersonHiking,
      title: "Experiência Aumentada",
      shortDescription: "Aprendizagem aumentada.",
      fullDescription: `<p class='mb-4 text-justify'>Neste pilar, o treinamento utiliza ferramentas e abordagens inovadoras para enriquecer a experiência de aprendizado. São três os principais elementos:</p>

<p class='mb-4 text-justify'><strong>Uso de estratégias de gamificação</strong>: Aplicar técnicas de gamificação torna o aprendizado mais dinâmico e motivador, com desafios, recompensas e rankings que estimulam o engajamento. No contexto de TI, essa abordagem pode incluir competições de resolução de problemas, hackathons e desafios de código.</p>

<p class='mb-4 text-justify'><strong>Aplicação de micro-certificação baseada no padrão Open Badges</strong>: Através das micro-certificações, os participantes recebem reconhecimento por conquistas específicas e habilidades adquiridas ao longo do treinamento. Cada certificado, no formato de Open Badge, é uma credencial digital que valida o conhecimento do participante em áreas como programação, análise de dados e design de software.</p>

<p class='mb-4 text-justify'><strong>Progressão personalizada</strong>: Esse componente permite que o participante avance em seu próprio ritmo e de acordo com suas necessidades e objetivos. Com uma trilha de aprendizado customizável, o participante pode escolher os módulos e áreas em que quer se aprofundar, de modo a maximizar o retorno sobre seu tempo de estudo e garantir um aprendizado direcionado às suas metas de carreira em TI.</p>`
    },
    {
      icon: faHandshake,
      title: "Valor e Impacto Social",
      shortDescription: "Geração de valor social.",
      fullDescription: "<p class='mb-4 text-justify'>Este pilar trata do compromisso do treinamento em gerar impacto positivo, promovendo práticas éticas e sustentáveis na tecnologia. Os participantes são incentivados a refletir sobre a aplicação de suas habilidades para resolver problemas sociais, como inclusão digital, acessibilidade e uso ético de dados. </p><p class='mb-4 text-justify'>Isso inclui projetos voltados para criação de soluções para as comunidades em que os participantes moram. Ideias como ferramentas que promovem a educação em comunidades carentes ou soluções tecnológicas para melhorar a qualidade de vida de populações vulneráveis.</p><p class='mb-4 text-justify'>A ideia é formar profissionais que, além de tecnicamente competentes, sejam conscientes do impacto social e ambiental de suas ações e estejam comprometidos com o desenvolvimento de uma tecnologia responsável e inclusiva.</p>"
    },
  ];

  const partners = [
    {
        "titulo": "NetProject",
        "imagem": "/home/partners/netproject.png",
        "descricao": "A NetProject oferece serviços e soluções integradas para práticas híbridas de Gestão de Projetos para o que importa de verdade: boas decisões e resultados."
    }
  ];

export default function JourneyPage() {
    return (
        <div className="container mx-auto">
            <div className="md:pt-0  pt-0 m-auto text-secondary-dark">
                <div className="">

                    
                    <section className="container mb-10">
                        <SectionTitle>Sobre o WebTech Journey?</SectionTitle>
                        <SectionDescription>
                            O WebTech Journey é um programa que tem como objetivo promover inclusão digital e oportunidades de trabalho para o público geral por meio de uma jornada de aprendizado com uma metodologia própria. Através da extensão na universidade, o projeto capta alunos e professores que fornecem conteúdo e apoio técnico, promovendo uma série de eventos de engajamento e multiplicação do conhecimento, mostrando todas estas ações em canais de redes sociais (Linkedin, Youtube, Instagram e GitHub).
                        </SectionDescription>
                    </section>
                    
                    <section className="container mb-10">
                    <SectionTitle>Metodologia do Programa</SectionTitle>
                        <SectionDescription>
                            O Journey conta com a experiência de mentores do programa tanto na atuação docente quanto no mercado de trabalho para a formação de talentos e o processo de capacitação emprega metodologias ativas aliadas às abordagens ágeis de desenvolvimento de soluções digitais.
                        </SectionDescription> 

                        <h2 className="text-2xl font-semibold mt-10 mb-7">Pilares do programa</h2>
                        <SectionDescription>
                            O Journey foi concebido com alguns pilares que norteiam todo o processo para capacitação dos participantes, garantindo que eles adquiram habilidades técnicas e comportamentais essenciais para o sucesso no mercado de trabalho.
                        </SectionDescription>                         
                        <InfoSection 
                            cards={cardData} />

                        <h2 className="text-2xl font-semibold mt-10 mb-7">Estrutura do Programa</h2>
                        <SectionDescription>
                        O jornada é dividida em etapas que vão aumentando a complexidade na construção de uma aplicação completa e com tecnologias utilizadas no mercado. 
                        </SectionDescription>
                        <SectionDescription>Na medida em que avança nas etapas, os participantes podem ir conquistando bônus na disciplina e também reconhecimento que podem compartilhar com seus colegas. A imagem a seguir sintetiza essa dinâmica.
                            <img src="/icons/journey-estrutura.png" className="w-400 h-auto md:w-50" />
                        </SectionDescription>
                    </section>

                    <SectionTitle>Jornadas do Programa</SectionTitle>
                    <section className="text-xl mb-10">
                        <h2 className="text-2xl font-semibold mt-10 mb-7">Jornada do Projeto Web</h2>
                        <SectionDescription>Bem-vindo à Jornada do Projeto Web, uma oportunidade única de aprendizado, onde você apende a desenvolver um site completo ao mesmo tempo que descobrirá como suas habilidades técnicas podem transformar necessidades reais em soluções impactantes. Ao longo das etapas, você será guiado por um processo prático que combina teoria e prática, desafia a criatividade e estimula o pensamento crítico.
                        </SectionDescription>

                        <SectionDescription>As tecnologias empregadas na Jornada do Projeto Web são:
                        </SectionDescription>
                        <div className="flex my-4 justify-center gap-4">
                                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
                                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
                                <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
                                <img src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white" />
                                <img src="https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" />
                                <img src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white" />
                        </div>


                        <SectionDescription>A jornada está dividida em etapas que vão aumentando a complexidade na construção de uma aplicação completa e com tecnologias utilizadas no mercado.                            
                        </SectionDescription>

                        <div className="mx-auto m-10 p-8 bg-gray">

                            <details className="mt-2">
                                <summary className="font-semibold">Etapa 1 - Site Estático (HTML e CSS)</summary>
                                <div className="mt-2 ml-4 p-4 border-b-4  border-amber-400 bg-neutral-300">
                                    <p>É criado um site web simples usando HTML para estrutura e CSS para estilização que contenha múltiplas páginas interligadas, como uma página inicial, uma página "Sobre", dados dos produtos ou serviços e uma página de contato.</p>
                                </div>
                            </details>

                            <details className="mt-4">
                                <summary className="font-semibold">Etapa 2 - Adição de Interatividade (JavaScript)</summary>
                                <div className="mt-2 ml-4 p-4 border-b-4  border-amber-400 bg-neutral-300">
                                    <p>São adicionados elementos interativos ao site estático, como botões que mostram ou escondem conteúdo, validação de formulários simples no lado do cliente, ou uma galeria de imagens com funcionalidade de navegação.</p>
                                </div>
                            </details>

                            <details className="mt-4">
                                <summary className="font-semibold">Etapa 3 - Desenvolvimento de um Back-End Simples (JSONServer)</summary>
                                <div className="mt-2 ml-4 p-4 border-b-4  border-amber-400 bg-neutral-300">
                                    <p>O projeto deve integrar um servidor simples baseado no JSONServer, com dados mantidos em um arquivo JSON e que responde a requisições feitas pelo front-end para mostrar dados dinâmicos. Pode incluir funcionalidades como processar formulários e enviar dados de volta ao usuário.</p>
                                </div>
                            </details>

                            <details className="mt-4">
                                <summary className="font-semibold">Etapa 4 - Integração com Banco de Dados (Node.js e SQL)</summary>
                                <div className="mt-2 ml-4 p-4 border-b-4  border-amber-400 bg-neutral-300">
                                    <p>É criado um back end baseado em APIs RESTful, integrado a um banco de dados PostgreSQL que permite o armazenamento de informações de usuários e dados da aplicação, fornecendo funcionalidades de login e telas de administração dos dados do site.</p>
                                </div>
                            </details>

                            <details className="mt-4">
                                <summary className="font-semibold">Etapa 5 - Refinamento e Implementação de Funcionalidades Avançadas</summary>
                                <div className="mt-2 ml-4 p-4 border-b-4  border-amber-400 bg-neutral-300">
                                    <p>Os alunos devem adicionar funcionalidades mais complexas, como autenticação de usuários (login/logout), integração com APIs externas (como Google Maps ou APIs de redes sociais), e refinamento do design e usabilidade do site.</p>
                                </div>
                            </details>
                            
                            <details className="mt-4">
                                <summary className="font-semibold">Etapa Final - Avaliação e Classificação do Projeto Web</summary>
                                <div className="mt-2 ml-4 p-4 border-b-4  border-amber-400 bg-neutral-300">
                                    <p className="mb-4">Uma vez o projeto entregue por meio de um repositório público do GitHub, registrando sua participação no programa, será feita uma avaliação do site e o projeto pode ser enquadrado em 3 classes:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Nível 1 - Master:</strong> projeto que atende a um cliente real, contendo funcionalidades de dados dinâmicos armazenados em bancos de dados e ambiente administrador com segurança, publicado na Internet em domínio específico (siteX.com.br) e com visibilidade registrada no Google Meu Negócio.</li>
                                        <li><strong>Nível 2 - Intermediário:</strong> projeto fictício ou com cliente real, apresentando funcionalidades com dados dinâmicos armazenados em bancos de dados.</li>
                                        <li><strong>Nível 3 - Simples:</strong> Projeto fictício entregue por meio de arquivo zip ou publicado em servidores gratuitos.</li>
                                    </ul>
                                </div>
                            </details>
                        </div>


                        <SectionDescription>
                        Inscreva-se agora para participar da jornada do Projeto Web.
                        </SectionDescription>
                        <div className="place-items-center mx-auto bg-gray relative w-full overflow-hidden aspect-square">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeectoeclTayxMa6PHaSleM1ybMucC_BbbSg_czeJx07R5LXA/viewform?embedded=true" className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"></iframe>
                        </div>
                    </section>

                    <SectionTitle>Parceiros do WebTech Journey</SectionTitle>
                    <p className="text-xl my-8">As empresas parceriras participam da estruturação do programa, contribuindo com conteúdos e ações de engajamento, mas principalmente recebendo os participantes para rodadas de oportunidades de estágio e emprego.</p>
                    <section className="container bg-primary mb-10">
                        <div className="container mx-auto py-5">
                              <PartnersSection partners={partners} />
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}