import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function DaysRedirection() {
    return (
        <section className="relative bg-[#111] py-28 text-white w-full border-y border-[#333] overflow-hidden">
            {/* Efeitos de fundo sutis */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-primary/5 blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 lg:px-8 relative z-10">
                <div className="flex flex-col items-center justify-center text-center gap-8 max-w-4xl mx-auto">
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-400 to-amber-300 drop-shadow-sm">
                            Acesse o site do WebTech Days
                        </h2>
                        <p className="text-xl lg:text-2xl font-medium text-gray-300">
                            Acompanhe a programação completa em nosso site.
                        </p>
                    </div>
                    <div className="mt-4">
                        <a
                            href="https://days.apps.webtech.network"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 px-12 py-5 bg-primary hover:bg-primary-light text-secondary-dark font-extrabold text-xl rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:-translate-y-1"
                        >
                            ACESSAR
                            <FontAwesomeIcon icon={faArrowRight} className="text-2xl group-hover:translate-x-2 transition-transform duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
