import ButtonLink from "../components/common/ButtonLink";
import SectionTitle from "../components/common/SectionTitle";
import SectionDescription from "../components/common/SectionDescription";

export default function JourneyPage() {
    return (
        <div className="container mx-auto">
            <div className="md:pt-0  pt-0 m-auto text-secondary-dark">
                <div className="">

                    <div>
                        <SectionTitle>Sobre o WebTech Journey?</SectionTitle>
                        <SectionDescription>
                            O WebTech Journey é um programa que tem como objetivo promover inclusão digital e oportunidades de trabalho para o público geral por meio de uma jornada de aprendizado com uma metodologia própria. Através da extensão da universidade PUC Minas, o projeto capta alunos e professores que fornecem conteúdo e apoio técnico, promovendo uma série de eventos de engajamento e multiplicação do conhecimento, mostrando todas estas ações em canais de redes sociais (Linkedin, Youtube, Instagram e GitHub).
                        </SectionDescription>
                    </div>

                    <div>
                        <SectionTitle>Pilares do WebTech Journey</SectionTitle>
                        <p className="mb-8 text-xl text-left">A experiência que será vivenciada pelos participantes do Webtech Journey é construída com alguns pilares como norteadores. São eles:</p>
                        <ul className="list-disc text-xl ml-8">
                            <li>Ensino baseado no desenvolvimento de competências</li>
                            <li>Curadoria e colaboração na criação de conteúdo</li>
                            <li>Criação de um ambiente de socialização e pertencimento, essa experiência vai fazer com que o aluno vivencie essas sensações.</li>
                            <li>Experiência de aprendizagem aumentada
                                <ul className="list-disc ml-8">
                                    <li>Uso de estratégias de gamificação, desfrutando de competições saudáveis que irão gerar incentivo para continuar aprendendo.</li> 
                                    <li>Aplicação de micro-certificação baseada no padrão Open Badges validadas pelo próprio WebTech.</li>
                                    <li>Progressão personalizada.</li>
                                </ul> 
                            </li>
                            <li>Geração de valor e impacto social, permitindo contribuir com a sociedade ou meio no qual você está inserido.</li>
                        </ul>
                    </div>

                    <div>
                        <SectionTitle>Estrutura do Programa</SectionTitle>
                        <SectionDescription>
                            <img src="/icons/journey-estrutura.png" className="w-400 h-auto md:w-50" />
                        </SectionDescription>
                    </div>



                    <SectionTitle>Parceiros</SectionTitle>
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-5 pb-[74px]">
                        <a href="https://www.sydle.com/br/" target="blank"><img className="w-[200px] h-[100px] object-cover rounded-xl mx-auto mt-5 drop-shadow-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT91t3QEKoeNLm5zkIJFMxlGQvIzrlf9AKtS9qf-p-hbQ&s" alt="placeholder" /></a>
                        <a href="https://www.dtidigital.com.br/" target="blank"><img className="w-[200px] h-[100px] object-cover rounded-xl mx-auto mt-5 drop-shadow-md" src="https://activecs.co/wp-content/uploads/2019/01/case-dti.jpg" alt="placeholder" /></a>
                        <a href="https://ioasys.com.br/" target="blank"><img className="w-[200px] h-[100px] object-cover rounded-xl mx-auto mt-5 drop-shadow-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd38la2GhtRTT_d7xIyc2KId7HYNcY8j_-y2VsfrJpqg&s" alt="placeholder" /></a>
                        <a href="https://mobile.wayminder.com.br/" target="blank"><img className="w-[200px] h-[100px] object-cover rounded-xl mx-auto mt-5 drop-shadow-md" src="https://www.projetodraft.com/wp-content/uploads/2023/07/way-minder.png" alt="placeholder" /></a>
                    </div>

                </div>
            </div>
        </div>
    );
}