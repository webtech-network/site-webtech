'use client'

import React from 'react';

const editions = [
    {
        year: "2026/01",
        title: "Journey Letramento em IA",
        description: "Parceria entre a WebTech e as empresas Vivver e Crescer Sistemas, com foco na capacitação presencial de profissionais em fundamentos de Inteligência Artificial. A jornada teve duração de 12 horas e abordou ferramentas básicas de IA, conceitos essenciais e terminologias utilizadas no mercado.",
        students: "26 participantes",
    },
    {
        year: "2025/02",
        title: "Journey Backend LEVTY",
        description: "Parceria entre a empresa de tecnologia LEVTY e a WebTech, voltada à capacitação de alunos em tecnologias backend. A jornada combinou aulas gravadas, atividades hands-on e entregas quinzenais, permitindo que os participantes evoluíssem em ferramentas e conceitos como APIs, Node.js, Prisma e Banco de Dados.",
        students: "150 participantes",
    },
    {
        year: "2025/01",
        title: "Journey ASSPROM",
        description: "Parceria entre o projeto de extensão WebTech e a entidade ASSPROM, com o objetivo de capacitar jovens em tecnologias de desenvolvimento web. Ao longo de 10 encontros, os participantes tiveram contato com fundamentos da web como HTML, CSS.",
        students: "20 participantes",
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
