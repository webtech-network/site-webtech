import React from 'react';
import SectionTitle from '../common/SectionTitle';

const meetupSponsors = [
    {
        "titulo": "Hotmart",
        "imagem": "/home/partners/hotmart.png", 
        "descricao": "A Hotmart é uma empresa global de tecnologia focada na Creator Economy, com o propósito de empoderar criadores de conteúdo a viverem de suas paixões através de produtos digitais."
    }
];

export default function MeetupSponsor() {
    if (!meetupSponsors || meetupSponsors.length === 0) return null;

    const sponsor = meetupSponsors[0];

    return (
        <section className="bg-gray-50 pt-10 pb-16">
            <div className="container mx-auto px-4 lg:px-8 text-center text-secondary-dark">
                <SectionTitle className="text-center">Patrocinador Oficial</SectionTitle>
                <div className="mt-10 flex justify-center">
                    <div className="w-full max-w-4xl bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                        <div className="w-full md:w-1/3 flex justify-center shrink-0">
                            <img src={sponsor.imagem} alt={sponsor.titulo} className="w-full max-w-[200px] object-contain mix-blend-multiply" />
                        </div>
                        <div className="w-full md:w-2/3 text-left">
                            <h3 className="text-3xl font-bold text-secondary-dark mb-4">{sponsor.titulo}</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">{sponsor.descricao}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
