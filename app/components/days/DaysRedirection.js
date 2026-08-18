import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function DaysRedirection() {
    return (
        <section className="bg-white pt-20 pb-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    {/* Text */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary-dark mb-6">
                            O que é o <span className="text-primary">WebTech Days?</span>
                        </h2>
                        <p className="text-gray-600 text-base leading-relaxed">
                            O WebTech Days é um evento que oferece palestras, oficinas
                            práticas e sessões de mentoria com a participação de empresas,
                            especialistas e comunidade acadêmica.
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mt-4">
                            Em sua terceira edição, o evento foca em tecnologias e soluções
                            de Inteligência Artificial.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="https://days.apps.webtech.network"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-[#FFB800] px-6 py-3 text-sm font-bold text-[#070A08] shadow-[0_12px_28px_rgba(255,184,0,0.22)] transition-all hover:bg-[#FFD45A] hover:shadow-[0_16px_34px_rgba(255,184,0,0.3)]"
                            >
                                Saiba mais sobre o WebTech Days
                            </Link>
                        </div>
                    </div>

                    {/* Mission image */}
                    <div className="rounded-2xl overflow-hidden bg-gray-100 h-80 md:h-96 relative border border-gray-200 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                        <Image
                            src="/days/banner.jpeg"
                            alt="WebTech Days"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
