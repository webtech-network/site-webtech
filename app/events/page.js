import EventsSection from "../components/events/EventsSection";
import SectionTitle from "../components/common/SectionTitle";
import SectionDescription from "../components/common/SectionDescription";
import RecordedEvent from "../components/events/RecordedEvent";
import ButtonLink from "../components/common/ButtonLink";

export const revalidate = 60;

export default function EventsPage() {
    return (
        <div className="container mx-auto">
            <div className="md:pt-0  pt-0 m-auto text-secondary-dark">
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
                            description="WebTech Days - JavaScript Edition que aconteceu no dia 06/12/2023 na PUC Minas Lourdes em Belo Horizonte/MG."
                            date="06/12/2023"
                            videoUrl="https://www.youtube.com/embed/bMi6UUm_o7A" />
                        <RecordedEvent
                            title="WebTech Days - JavaScript Edition | Frameworks Front-End mais populares (Samuel Martins)"
                            description="WebTech Days - JavaScript Edition que aconteceu no dia 06/12/2023 na PUC Minas Lourdes em Belo Horizonte/MG."
                            date="06/12/2023"
                            videoUrl="https://www.youtube.com/embed/bMi6UUm_o7A" />
                    </div>

                    <div className="flex justify-center">
                        <ButtonLink link="https://www.youtube.com/@Webtech.PUCMinas/featured" text="Ver mais" />
                    </div>

                    <SectionTitle>Parceiros</SectionTitle>
                    <div className="grid md:grid-cols-4 grid-cols-2 gap-5 pb-[74px]">
                        <a href="https://www.sydle.com/br/" target="blank"><img className="w-[200px] h-[100px] object-cover rounded-xl mx-auto mt-5 drop-shadow-md" src="/home/partners/sydle.png" alt="placeholder" /></a>
                        <a href="https://www.dtidigital.com.br/" target="blank"><img className="w-[200px] h-[100px] object-cover rounded-xl mx-auto mt-5 drop-shadow-md" src="/home/partners/dti.png" alt="placeholder" /></a>
                        <a href="https://ioasys.com.br/" target="blank"><img className="w-[200px] h-[100px] object-cover rounded-xl mx-auto mt-5 drop-shadow-md" src="/home/partners/ioasys.png" alt="placeholder" /></a>
                        <a href="https://mobile.wayminder.com.br/" target="blank"><img className="w-[200px] h-[100px] object-cover rounded-xl mx-auto mt-5 drop-shadow-md" src="/home/partners/waymind.png" alt="placeholder" /></a>
                    </div>

                </div>
            </div>
        </div>
    );
}