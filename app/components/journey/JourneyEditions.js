'use client'

import React from 'react';

const editions = [
    {
        year: "YYYY",
        title: "Edição YYYY.X",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in venenatis enim.",
        students: "+XX participantes",
    },
    {
        year: "YYYY",
        title: "Edição YYYY.X",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        students: "+XX participantes",
    },
    {
        year: "YYYY",
        title: "Edição YYYY.X",
        description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        students: "+XX participantes",
    }
];

export default function JourneyEditions() {
    return (
        <section className="my-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
                    Edições <span className="text-primary">Realizadas</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Acompanhe o histórico de sucesso do programa e os números que mostram nosso impacto.
                </p>
            </div>
            
            <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                {editions.map((edition, index) => (
                    <div 
                        key={index}
                        className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-amber-500"
                    >
                        <div className="flex-shrink-0 text-center md:text-left">
                            <span className="text-sm font-bold text-amber-500 uppercase tracking-wider">{edition.year}</span>
                            <h3 className="text-2xl font-bold text-secondary-dark mt-1">{edition.title}</h3>
                        </div>
                        <div className="flex-1 md:pl-6 md:border-l border-gray-100">
                            <p className="text-gray-600 mb-4">{edition.description}</p>
                            <div className="flex gap-4">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
                                    {edition.students}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
