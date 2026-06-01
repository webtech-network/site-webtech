import React from 'react';
import Banner from '../components/home/Banner';
import { fetchDaysEvents } from '../components/days/GetDaysEvents';
import MeetupEventsSection from '../components/meetup/MeetupEventsSection';
import DaysCTA from '../components/days/DaysCTA';
import DaysRedirection from '../components/days/DaysRedirection';

export const revalidate = 60;

export const metadata = {
    title: 'WebTech Days',
    description: 'Página oficial do evento WebTech Days. Acesse a plataforma, veja a programação e seja um patrocinador.',
};

export default async function DaysPage() {
    const { upcomingEvents, pastEvents } = await fetchDaysEvents();

    return (
        <div className="bg-white">
            <header className="py-10 animated-background bg-gradient-to-r from-amber-500 via-slate-600 to-sky-700">
                <Banner events={upcomingEvents} initialIndex={0} />
            </header>

            <DaysRedirection />

            <main className="w-full px-6 mt-16">
                <div className="max-w-7xl mx-auto">
                    {pastEvents && pastEvents.length > 0 && (
                        <section className="mb-16">
                            <MeetupEventsSection events={pastEvents} />
                        </section>
                    )}

                    <section className="mb-10">
                        <DaysCTA />
                    </section>
                </div>
            </main>
        </div>
    );
}
