'use client'

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        author: "Nome Sobrenome",
        role: "Participante da Edição YYYY.X",
        avatar: "https://i.pravatar.cc/150?img=8"
    },
    {
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        author: "Nome Sobrenome",
        role: "Participante da Edição YYYY.X",
        avatar: "https://i.pravatar.cc/150?img=12"
    },
    {
        text: "Sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio.",
        author: "Nome Sobrenome",
        role: "Participante da Edição YYYY.X",
        avatar: "https://i.pravatar.cc/150?img=3"
    }
];

export default function JourneyTestimonials() {
    return (
        <section className="my-16 bg-slate-50 py-16 rounded-3xl">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-4">
                        O que dizem nossos <span className="text-primary">Participantes</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Histórias reais de quem participou e transformou sua carreira com o WebTech Journey.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div 
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg relative mt-8 pt-12"
                        >
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                                <img 
                                    src={item.avatar} 
                                    alt={item.author} 
                                    className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
                                />
                            </div>
                            <div className="text-amber-500 mb-4 flex justify-center">
                                <FontAwesomeIcon icon={faQuoteLeft} className="text-3xl opacity-50" />
                            </div>
                            <p className="text-gray-700 italic text-center mb-6 leading-relaxed">
                                "{item.text}"
                            </p>
                            <div className="text-center">
                                <h4 className="font-bold text-secondary-dark">{item.author}</h4>
                                <p className="text-sm text-gray-500">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
