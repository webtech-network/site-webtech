'use client'

import React from 'react';

const tracks = [
    {
        title: "Introdução à Web",
        description: "Aprenda os fundamentos da web: HTML, CSS e princípios de design.",
        icon: "public",
        color: "text-purple-500",
        bgColor: "bg-purple-100",
    },
    {
        title: "Desenvolvimento Back End / APIs",
        description: "Construa a lógica e as bases de dados que alimentam sistemas modernos.",
        icon: "dns",
        color: "text-blue-500",
        bgColor: "bg-blue-100",
    },
    {
        title: "Desenvolvimento Front End (React e Next)",
        description: "Crie interfaces de usuário dinâmicas e experiências visuais incríveis.",
        icon: "code",
        color: "text-amber-500",
        bgColor: "bg-amber-100",
    },
    {
        title: "Letramento em IA",
        description: "Entenda e aplique conceitos fundamentais de Inteligência Artificial.",
        icon: "smart_toy",
        color: "text-emerald-500",
        bgColor: "bg-emerald-100",
    },
    {
        title: "Letramento em Dados",
        description: "Aprenda a extrair, analisar e transformar dados em informações valiosas.",
        icon: "query_stats",
        color: "text-indigo-500",
        bgColor: "bg-indigo-100",
    },
    {
        title: "Design Thinking",
        description: "Resolva problemas complexos com foco no usuário e ideação criativa.",
        icon: "lightbulb",
        color: "text-pink-500",
        bgColor: "bg-pink-100",
    }
];

export default function JourneyTracks() {
    return (
        <section className="my-16">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
                    Jornadas do <span className="text-primary">Programa</span>
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Escolha o caminho que mais combina com seus objetivos e inicie sua jornada de aprendizado.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tracks.map((track, index) => (
                    <div 
                        key={index}
                        className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                    >
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${track.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                            <span className={`material-symbols-outlined text-3xl ${track.color}`}>
                                {track.icon}
                            </span>
                        </div>
                        <h3 className="text-xl font-bold text-secondary-dark mb-3">{track.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{track.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
