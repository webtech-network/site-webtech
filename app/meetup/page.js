import React from 'react';
import Banner from '../components/home/Banner';
import { fetchMeetupEvents } from '../components/meetup/GetMeetupEvents';
import MeetupExplanation from '../components/meetup/MeetupExplanation';
import MeetupEventsSection from '../components/meetup/MeetupEventsSection';
import MeetupCTA from '../components/meetup/MeetupCTA';
import PartnersSection from '../components/home/PartnersSection';
import SectionTitle from '../components/common/SectionTitle';

export const revalidate = 60;

const meetupSponsors = [
    {
        "titulo": "Empresa Patrocinadora 1",
        "imagem": "/home/partners/netproject.png", // Imagem de placeholder
        "descricao": "Descrição da empresa patrocinadora específica do WebTech Meetup."
    },
    {
        "titulo": "Empresa Patrocinadora 2",
        "imagem": "/home/partners/levty.png", // Imagem de placeholder
        "descricao": "Descrição da empresa patrocinadora específica do WebTech Meetup."
    }
    // Adicione os patrocinadores específicos aqui
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

                <section className="mb-10">
                    <MeetupCTA />
                </section>

                {pastEvents && pastEvents.length > 0 && (
                    <section className="mb-16">
                        <MeetupEventsSection events={pastEvents} />
                    </section>
                )}
            </main>

            <section className="bg-primary pt-10 pb-16">
                <div className="container mx-auto px-4 lg:px-8">
                    <SectionTitle>Patrocinadores</SectionTitle>
                    <div className="mt-6">
                        <PartnersSection partners={meetupSponsors} />
                    </div>
                </div>
            </section>
        </div>
    );
}
