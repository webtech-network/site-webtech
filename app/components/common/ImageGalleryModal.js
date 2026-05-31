'use client'

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function ImageGalleryModal({ images, initialIndex, onClose }) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    useEffect(() => {
        setCurrentIndex(initialIndex);
    }, [initialIndex]);

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    if (images.length === 0 || currentIndex === null) return null;

    return (
        <div 
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 md:p-8 transition-opacity duration-300"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full p-4 md:p-6 relative transform scale-100 transition-transform duration-300"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-4 px-2">
                    <h3 className="text-2xl font-bold text-secondary-dark">
                        Galeria de Fotos <span className="text-sm font-normal text-gray-500 ml-2">({currentIndex + 1} de {images.length})</span>
                    </h3>
                    <button 
                        className="text-gray-500 hover:text-red-500 transition-colors w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
                        onClick={onClose}
                        title="Fechar"
                    >
                        <FontAwesomeIcon icon={faTimes} className="text-2xl" />
                    </button>
                </div>
                
                <div className="flex justify-center items-center bg-gray-100 rounded-2xl overflow-hidden relative group">
                    <button 
                        className="absolute left-2 md:left-4 z-10 bg-white/80 hover:bg-white text-secondary-dark rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
                        onClick={prevImage}
                        title="Anterior"
                    >
                        <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
                    </button>

                    <img 
                        src={images[currentIndex]} 
                        alt={`Expanded photo ${currentIndex + 1}`} 
                        className="w-full max-h-[75vh] object-contain"
                    />

                    <button 
                        className="absolute right-2 md:right-4 z-10 bg-white/80 hover:bg-white text-secondary-dark rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100"
                        onClick={nextImage}
                        title="Próxima"
                    >
                        <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
}
