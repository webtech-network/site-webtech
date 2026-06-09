'use client'

import React from 'react';

export default function JourneyIntro() {
    return (
        <div className="flex flex-col lg:flex-row items-center gap-12 my-10">
            <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-6">
                    Sobre o <span className="text-primary">WebTech Journey</span>
                </h2>
                <div className="mt-6">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        O WebTech Journey é um programa que tem como objetivo promover inclusão digital e oportunidades de trabalho para o público geral por meio de uma jornada de aprendizado com uma metodologia própria.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Através da extensão na universidade, o projeto capta alunos e professores que fornecem conteúdo e apoio técnico, promovendo uma série de eventos de engajamento e multiplicação do conhecimento, mostrando todas estas ações em canais de redes sociais (Linkedin, Youtube, Instagram e GitHub).
                    </p>
                </div>
            </div>
            <div className="flex-1 w-full flex flex-col gap-4">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-300">
                    {/* Placeholder para uma imagem, podemos trocar depois */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">WebTech Journey</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
