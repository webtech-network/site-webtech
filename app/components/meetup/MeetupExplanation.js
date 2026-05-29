import React from 'react';
import SectionTitle from '../common/SectionTitle';
import SectionDescription from '../common/SectionDescription';

export default function MeetupExplanation() {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-12 my-10">
            <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-6">O que é o <span className="text-primary">WebTech Meetup?</span></h2>
                <div className="mt-6">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Encontro mensal que conecta universidade e mercado para aprofundamento em temas específicos, troca de experiências e networking.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        "A extensão como forma de capacitação da comunidade — conectando universidade, mercado e pessoas."
                    </p>
                </div>
            </div>
            <div className="flex-1 w-full">
                <div className="rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-300">
                    <img src="/meetup/foto2.jpeg" alt="WebTech Meetup Networking" className="object-cover w-full h-full max-h-[450px]" />
                </div>
            </div>
        </div>
    );
}
