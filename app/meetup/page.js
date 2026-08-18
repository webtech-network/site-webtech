import React from 'react';
import Banner from '../components/home/Banner';
import { fetchMeetupEvents } from '../components/meetup/GetMeetupEvents';
import MeetupExplanation from '../components/meetup/MeetupExplanation';
import MeetupPlanning from '../components/meetup/MeetupPlanning';
import MeetupSponsor from '../components/meetup/MeetupSponsor';
import MeetupEventsSection from '../components/meetup/MeetupEventsSection';
import MeetupCTA from '../components/meetup/MeetupCTA';

export const revalidate = 60;

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

            <MeetupSponsor />

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
