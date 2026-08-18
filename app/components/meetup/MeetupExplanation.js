'use client'

import React, { useState } from 'react';
import SectionTitle from '../common/SectionTitle';
import SectionDescription from '../common/SectionDescription';
import ImageGalleryModal from '../common/ImageGalleryModal';

const images = [
    '/meetup/foto1.jpeg',
    '/meetup/foto2.jpeg',
    '/meetup/foto3.jpeg',
    '/meetup/foto4.jpeg',
    '/meetup/foto5.jpeg',
    '/meetup/foto6.jpeg',
    '/meetup/foto7.jpeg',
    '/meetup/foto8.jpeg'
];

export default function MeetupExplanation() {
    const [currentIndex, setCurrentIndex] = useState(null);

    const openImage = (index) => setCurrentIndex(index);
    const closeImage = () => setCurrentIndex(null);

    return (
        <>
            <div className="flex flex-col lg:flex-row items-center gap-12 my-10">
                <div className="flex-1 text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-6">O que é o <span className="text-primary">WebTech Meetup?</span></h2>
                    <div className="mt-6">
                        <p className="text-lg text-gray-700 leading-relaxed mb-4">
                            Encontro mensal que conecta universidade e mercado para aprofundamento em temas específicos, troca de experiências e networking.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            "A extensão como forma de capacitação da comunidade — conectando universidade, mercado e pessoas."
                        </p>
                    </div>
                </div>
                <div className="flex-1 w-full flex flex-col gap-4">
                    <img 
                        onClick={() => openImage(0)}
                        src={images[0]} 
                        alt="WebTech Meetup 1" 
                        className="object-cover w-full h-48 md:h-64 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer" 
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <img 
                            onClick={() => openImage(1)}
                            src={images[1]} 
                            alt="WebTech Meetup 2" 
                            className="object-cover w-full h-32 md:h-48 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer" 
                        />
                        <img 
                            onClick={() => openImage(2)}
                            src={images[2]} 
                            alt="WebTech Meetup 3" 
                            className="object-cover w-full h-32 md:h-48 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300 cursor-pointer" 
                        />
                    </div>
                </div>
            </div>

            {/* Lightbox / Modal */}
            <ImageGalleryModal 
                images={images} 
                initialIndex={currentIndex} 
                onClose={closeImage} 
            />
        </>
    );
}
