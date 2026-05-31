import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

export default function DaysCTA() {
    return (
        <div className="bg-secondary-dark text-white rounded-3xl p-8 lg:p-12 my-10 shadow-xl">
            <div className="flex flex-col items-center justify-center p-8 bg-secondary rounded-2xl border border-secondary-light hover:border-primary transition-colors max-w-2xl mx-auto text-center">
                <FontAwesomeIcon icon={faHandshake} className="text-5xl text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-3">Seja um Patrocinador do WebTech Days</h3>
                <p className="text-gray-300 mb-8 text-sm lg:text-base">
                    Apoie a comunidade de tecnologia e coloque sua marca em evidência no nosso maior evento do ano. Junte-se a nós para transformar a carreira de milhares de estudantes e profissionais.
                </p>
                <a href="mailto:contato@webtech.com.br?subject=Quero ser Patrocinador do WebTech Days" className="px-8 py-3 bg-primary hover:bg-primary-light text-secondary-dark font-bold rounded-xl transition-all hover:scale-105">
                    Quero Patrocinar
                </a>
            </div>
        </div>
    );
}
