import React from 'react';
import Banner from '../components/home/Banner';
import { fetchMeetupEvents } from '../components/meetup/GetMeetupEvents';
import MeetupExplanation from '../components/meetup/MeetupExplanation';
import MeetupPlanning from '../components/meetup/MeetupPlanning';
import MeetupEventsSection from '../components/meetup/MeetupEventsSection';
import MeetupCTA from '../components/meetup/MeetupCTA';
import SectionTitle from '../components/common/SectionTitle';

export const revalidate = 60;

const meetupSponsors = [
    {
        "titulo": "Hotmart",
        "imagem": "/home/partners/hotmart.png", 
        "descricao": "A Hotmart é uma empresa global de tecnologia focada na Creator Economy, com o propósito de empoderar criadores de conteúdo a viverem de suas paixões através de produtos digitais."
    }
];

export const metadata = {
    title: 'Meetup | WebTech',
    description: 'Página oficial do WebTech Meetup.',
};

export default async function MeetupPage() {
    const { upcomingEvents, pastEvents } = await fetchMeetupEvents();

    return (
        <div className="bg-white">
            <header className="py-10 animated-background bg-gradient-to-r from-amber-500 via-slate-600 to-sky-700">
                <Banner events={upcomingEvents} initialIndex={0} />
            </header>

            <main className="container mx-auto px-4 lg:px-8 mt-5">
                <section className="mb-10">
                    <MeetupExplanation />
                </section>
            </main>

            <MeetupPlanning />

            <section className="bg-gray-50 pt-10 pb-16">
                <div className="container mx-auto px-4 lg:px-8 text-center text-secondary-dark">
                    <SectionTitle className="text-center">Patrocinador Oficial</SectionTitle>
                    <div className="mt-10 flex justify-center">
                        <div className="w-full max-w-4xl bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/3 flex justify-center shrink-0">
                                <img src={meetupSponsors[0].imagem} alt={meetupSponsors[0].titulo} className="w-full max-w-[200px] object-contain mix-blend-multiply" />
                            </div>
                            <div className="w-full md:w-2/3 text-left">
                                <h3 className="text-3xl font-bold text-secondary-dark mb-4">{meetupSponsors[0].titulo}</h3>
                                <p className="text-lg text-gray-700 leading-relaxed">{meetupSponsors[0].descricao}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <main className="container mx-auto px-4 lg:px-8 mt-16">
                {pastEvents && pastEvents.length > 0 && (
                    <section className="mb-16">
                        <MeetupEventsSection events={pastEvents} />
                    </section>
                )}

                <section className="mb-10">
                    <MeetupCTA />
                </section>
            </main>
        </div>
    );
}
