'use client'

import React from 'react';
import InfoSection from '../common/InfoSection';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScrewdriverWrench,
  faBookOpenReader,
  faUsers,
  faPersonHiking,
  faHandshake,
  faArrowTrendUp,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const cardData = [
  {
    icon: faScrewdriverWrench,
    title: "Desenvolvimento de Competências",
    shortDescription: "Ensino baseado em competências.",
    fullDescription:
      "<p class='mb-4 text-justify'>Este pilar se concentra no fortalecimento das habilidades técnicas e comportamentais dos participantes.</p>",
  },
  {
    icon: faBookOpenReader,
    title: "Curadoria de Conteúdo",
    shortDescription: "Colaboração na criação de conteúdo.",
    fullDescription:
      "<p class='mb-4 text-justify'>A curadoria de conteúdo garante que os materiais de estudo e as atividades oferecidas sejam relevantes.</p>",
  },
  {
    icon: faUsers,
    title: "Socialização e Pertencimento",
    shortDescription: "Ambiente de socialização.",
    fullDescription:
      "<p class='mb-4 text-justify'>Esse pilar foca na construção de um ambiente inclusivo e colaborativo.</p>",
  },
  {
    icon: faPersonHiking,
    title: "Experiência Aumentada",
    shortDescription: "Aprendizagem aumentada.",
    fullDescription:
      "<p class='mb-4 text-justify'>Neste pilar, o treinamento utiliza ferramentas e abordagens inovadoras para enriquecer a experiência de aprendizado.</p>",
  },
  {
    icon: faHandshake,
    title: "Valor e Impacto Social",
    shortDescription: "Geração de valor social.",
    fullDescription:
      "<p class='mb-4 text-justify'>Este pilar trata do compromisso do treinamento em gerar impacto positivo.</p>",
  },
  {
    icon: faArrowTrendUp,
    title: "Evolução e Feedbacks",
    shortDescription: "Suporte de profissionais e correção automática.",
    fullDescription:
      "<p class='mb-4 text-justify'>Durante o programa, os participantes contam com acompanhamento constante e suporte especializado.</p>",
  },
];

export default function JourneyMethodology() {
    return (
        <section className="my-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* Left Side: Metodologia e Pilares */}
                <div>
                    <div className="mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
                            Metodologia e <span className="text-primary">Pilares</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            O Journey foi concebido com alguns pilares que norteiam todo o processo para capacitação dos participantes, garantindo que eles adquiram habilidades técnicas e comportamentais essenciais para o sucesso no mercado de trabalho.
                        </p>
                    </div>
                    
                    <InfoSection cards={cardData} />
                </div>

                {/* Right Side: Estrutura do Programa */}
                <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm h-full flex flex-col">
                    <h3 className="text-2xl font-bold text-secondary-dark mb-6">Estrutura do Programa</h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-8">
                        O WebTech Journey é dividido em etapas que vão aumentando a
                        complexidade na construção de uma aplicação completa e com tecnologias
                        utilizadas no mercado. Na medida em que avança nas etapas, os participantes podem ir
                        conquistando bônus na disciplina e reconhecimento.
                    </p>
                    <div className="flex justify-center flex-1 items-end w-full pb-4 mt-6">
                        <div className="flex flex-col items-center w-full max-w-sm space-y-2">
                            
                            {/* Avaliação e Troféu */}
                            <div className="flex flex-col items-center mb-2">
                                <FontAwesomeIcon icon={faTrophy} className="text-amber-500 text-4xl mb-2 drop-shadow-sm" />
                                <div className="bg-emerald-600 text-white font-bold text-[10px] sm:text-xs px-4 py-1 rounded-full uppercase tracking-widest shadow-md">
                                    Avaliação Final
                                </div>
                            </div>

                            {/* Pirâmide */}
                            <div className="w-1/3 bg-amber-500 flex justify-center items-center py-2 text-white rounded-md shadow-sm transition-transform hover:scale-105">
                                <span className="font-bold text-sm sm:text-base">Etapa 5</span>
                            </div>
                            <div className="w-1/2 bg-teal-500 flex justify-center items-center py-2 text-white rounded-md shadow-sm transition-transform hover:scale-105">
                                <span className="font-bold text-sm sm:text-base">Etapa 4</span>
                            </div>
                            <div className="w-2/3 bg-sky-500 flex justify-center items-center py-2 text-white rounded-md shadow-sm transition-transform hover:scale-105">
                                <span className="font-bold text-sm sm:text-base">Etapa 3</span>
                            </div>
                            <div className="w-5/6 bg-orange-500 flex justify-center items-center py-2 text-white rounded-md shadow-sm transition-transform hover:scale-105">
                                <span className="font-bold text-sm sm:text-base">Etapa 2</span>
                            </div>
                            <div className="w-full bg-slate-700 flex justify-center items-center py-2 text-white rounded-md shadow-sm transition-transform hover:scale-105">
                                <span className="font-bold text-sm sm:text-base">Etapa 1</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
