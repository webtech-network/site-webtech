'use client'

import React from 'react';
import InfoSection from '../common/InfoSection';
import {
  faScrewdriverWrench,
  faBookOpenReader,
  faUsers,
  faPersonHiking,
  faHandshake,
  faArrowTrendUp,
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
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
                    Metodologia e <span className="text-primary">Pilares</span>
                </h2>
                <p className="text-lg text-gray-600">
                    O Journey foi concebido com pilares que norteiam todo o processo de capacitação.
                </p>
            </div>
            
            <InfoSection cards={cardData} />

            <div className="mt-16 bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-bold text-secondary-dark mb-6">Estrutura do Programa</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    O WebTech Journey é dividido em etapas que vão aumentando a
                    complexidade na construção de uma aplicação completa e com tecnologias
                    utilizadas no mercado. Na medida em que avança nas etapas, os participantes podem ir
                    conquistando bônus na disciplina e reconhecimento.
                </p>
                <div className="flex justify-center">
                    <img
                        src="/icons/journey-estrutura.png"
                        alt="Estrutura do Journey"
                        className="w-full max-w-2xl rounded-xl shadow-md"
                    />
                </div>
            </div>
        </section>
    );
}
