import React from 'react';
import JourneyIntro from '../components/journey/JourneyIntro';
import JourneyTracks from '../components/journey/JourneyTracks';
import JourneyMethodology from '../components/journey/JourneyMethodology';
import JourneyEditions from '../components/journey/JourneyEditions';
import JourneyTestimonials from '../components/journey/JourneyTestimonials';

export const metadata = {
    title: 'Journey | WebTech',
    description: 'Página oficial do WebTech Journey.',
};


export default function JourneyPage() {
    return (
        <div className="bg-white">
            <header className="py-20 animated-background bg-gradient-to-r from-amber-500 via-slate-600 to-sky-700 flex items-center justify-center min-h-[300px]">
                <div className="text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                        WebTech Journey
                    </h1>
                    <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto drop-shadow-md">
                        Transformando vidas e carreiras através do desenvolvimento tecnológico.
                    </p>
                </div>
            </header>

            <main className="container mx-auto px-4 lg:px-8 mt-10">
                <JourneyIntro />
                
                <JourneyTracks />

                <JourneyMethodology />

                <JourneyEditions />

                <JourneyTestimonials />
            </main>

        </div>
    );
}
