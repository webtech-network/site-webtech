import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faHandshake } from '@fortawesome/free-solid-svg-icons';

export default function MeetupCTA() {
    return (
        <div className="bg-secondary-dark text-white rounded-3xl p-8 lg:p-12 my-10 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-center">
                <div className="flex flex-col items-center justify-center p-8 bg-secondary rounded-2xl border border-secondary-light hover:border-primary transition-colors">
                    <FontAwesomeIcon icon={faMicrophone} className="text-5xl text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-3">Seja um Palestrante</h3>
                    <p className="text-gray-300 mb-8 text-sm lg:text-base">
                        Quer compartilhar seu conhecimento e experiência com a nossa comunidade? Venha palestrar no próximo meetup!
                    </p>
                    <a href="https://wa.me/553188930508?text=Ol%C3%A1%21%20Desejo%20ser%20palestrante%20do%20WebTech%20Meetup." target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-primary hover:bg-primary-light text-secondary-dark font-bold rounded-xl transition-all hover:scale-105">
                        Quero Palestrar
                    </a>
                </div>
                <div className="flex flex-col items-center justify-center p-8 bg-secondary rounded-2xl border border-secondary-light hover:border-primary transition-colors">
                    <FontAwesomeIcon icon={faHandshake} className="text-5xl text-primary mb-6" />
                    <h3 className="text-2xl font-bold mb-3">Seja um Patrocinador</h3>
                    <p className="text-gray-300 mb-8 text-sm lg:text-base">
                        Apoie a comunidade de tecnologia e coloque sua marca em evidência nos nossos eventos e canais de comunicação.
                    </p>
                    <a href="https://wa.me/553188930508?text=Ol%C3%A1%21%20Desejo%20ser%20patrocinador%20do%20WebTech%20Meetup." target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-primary hover:bg-primary-light text-secondary-dark font-bold rounded-xl transition-all hover:scale-105">
                        Quero Patrocinar
                    </a>
                </div>
            </div>
        </div>
    );
}
