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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
