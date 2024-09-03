import PartnersSection from "./components/home/PartnersSection";
import EventsSection from "./components/home/EventsSection";
import Map from "./components/common/Map";
import Banner from "./components/home/Banner";
import { fetchEvents } from "./components/home/GetBannerEvents";
import SectionTitle from "./components/common/SectionTitle";
import SectionDescription from "./components/common/SectionDescription";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import ButtonLink from "./components/common/ButtonLink";

export const revalidate = 60;

export default async function Home() {
      const events = await fetchEvents();
      const initialIndex = 0;
      return (
            <div className="">
                  <header
                        className="py-10 animated-background bg-gradient-to-r from-amber-500 via-slate-600 to-sky-700" >
                        <Banner events={events} initialIndex={initialIndex} />
                  </header>
                  <section className="container mt-5 mb-10 lg:mb-5">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                              <div className="lg:mb-10 lg:col-span-8 flex flex-col items-center">
                                    <SectionTitle>WebTech Community</SectionTitle>
                                    <div className="px-10">
                                          <SectionDescription>
                                                Queremos formar uma comunidade de apaixonados por tecnologia e inovação,
                                                para compartilharmos conhecimento e experiências sobre desenvolvimento
                                                de ferramentas e soluções digitais.
                                          </SectionDescription>
                                    </div>
                                    <div className="">
                                          <a href="/discord" target="_blank">
                                                <div className="hover:scale-[1.05] rounded-2xl transition-all duration-300 bg-secondary hover:bg-secondary-light text-white border-secondary border-2 p-4">
                                                      <FontAwesomeIcon icon={faGlobe} className="text-xl mr-2" />
                                                      <span className="font-bold">Faça parte da nossa comunidade</span>
                                                </div>
                                          </a>
                                    </div>
                              </div>
                              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                                    <iframe className="rounded-lg h-96 w-96 lg:h-full lg:w-full" src="https://discord.com/widget?id=1167587327376359424&theme=dark" allowtransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                              </div>
                        </div>
                  </section>
                  <section className="bg-primary pb-10">
                        <div className="container mx-auto py-5">
                              <PartnersSection />
                        </div>
                  </section>
                  <section className="container mx-auto mb-10">
                        <EventsSection />
                  </section>
                  <Map />
            </div>
      );
}
