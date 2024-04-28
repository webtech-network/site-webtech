import EventsSection from "../components/events/EventsSection";
import SectionTitle from "../components/common/SectionTitle";
import SectionDescription from "../components/common/SectionDescription";
import RecordedEvent from "../components/events/RecordedEvent";

export default function EventsPage() {
    return (
        <main className="px-10 md:px-[74px]">
            <div className="container mx-auto">
                <div className="md:pt-0  pt-0 m-auto text-secondaryDark">
                    <div className="">

                        <EventsSection />

                        <div>
                            <SectionTitle>Perdeu algum evento?</SectionTitle>
                            <SectionDescription>
                                Alguns de nossos eventos contam com transmissão ao vivo e cobertura completa
                                em nosso canal do YouTube. Assista a alguns eventos passados e fique por dentro de
                                tudo o que aconteceu.
                            </SectionDescription>
                            <RecordedEvent
                                title="WebTech Days - JavaScript Edition | Await, async não é sync. I promise (Rommel Carneiro)"
                                description="WebTech Days - JavaScript Edition que aconteceu no dia 06/12/2023 na PUC Minas Praça da Liberdade em Belo Horizonte/MG."
                                date="06/12/2023"
                                videoUrl="https://www.youtube.com/embed/bMi6UUm_o7A" />
                            <RecordedEvent
                                title="WebTech Days - JavaScript Edition | Frameworks Front-End mais populares (Samuel Martins)"
                                description="WebTech Days - JavaScript Edition que aconteceu no dia 06/12/2023 na PUC Minas Praça da Liberdade em Belo Horizonte/MG."
                                date="06/12/2023"
                                videoUrl="https://www.youtube.com/embed/bMi6UUm_o7A" />
                        </div>

                        <div className="flex justify-center">
                            <a
                                href="https://www.youtube.com/@Webtech.PUCMinas/featured"
                                target="blank"
                            >
                                <button className="drop-shadow-md bg-primaria text-secundariaDark px-16 py-2 mb-5 rounded-md font-bold hover:bg-primariaLight md:text">Ver mais</button>
                            </a>
                        </div>

                        <SectionTitle>Parceiros</SectionTitle>
                        <div className="grid md:grid-cols-4 grid-cols-2 gap-5 pb-[74px]">
                            <a href="https://www.sydle.com/br/" target="blank"><img className="w-[200px] h-[100px] object-cover rounded-2xl mx-auto mt-5 drop-shadow-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT91t3QEKoeNLm5zkIJFMxlGQvIzrlf9AKtS9qf-p-hbQ&s" alt="placeholder" /></a>
                            <a href="https://www.dtidigital.com.br/" target="blank"><img className="w-[200px] h-[100px] object-cover rounded-2xl mx-auto mt-5 drop-shadow-md" src="https://activecs.co/wp-content/uploads/2019/01/case-dti.jpg" alt="placeholder" /></a>
                            <a href="https://ioasys.com.br/" target="blank"><img className="w-[200px] h-[100px] object-cover rounded-2xl mx-auto mt-5 drop-shadow-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd38la2GhtRTT_d7xIyc2KId7HYNcY8j_-y2VsfrJpqg&s" alt="placeholder" /></a>
                            <a href="https://mobile.wayminder.com.br/" target="blank"><img className="w-[200px] h-[100px] object-cover rounded-2xl mx-auto mt-5 drop-shadow-md" src="https://www.projetodraft.com/wp-content/uploads/2023/07/way-minder.png" alt="placeholder" /></a>
                        </div>

                    </div>
                </div>
            </div>
        </main >
    );
}