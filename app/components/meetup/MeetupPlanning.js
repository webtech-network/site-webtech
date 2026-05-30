import React from 'react';

const timeline = [
    { month: "MAIO", label: "EDIÇÃO #01", active: true },
    { month: "JUNHO", label: "EDIÇÃO #02", active: true },
    { month: "JULHO", label: "RECESSO", active: false },
    { month: "AGOST.", label: "EDIÇÃO #03", active: true },
    { month: "SETEM.", label: "EDIÇÃO #04", active: true },
    { month: "OUT.", label: "EDIÇÃO #05", active: true }
];

const cards = [
    { number: "5", title: "Edições Planejadas" },
    { number: "300+", title: "Participantes" },
    { number: "2", title: "Máximo de Parceiros" },
    { number: "1-2", title: "Edições na Sede" }
];

export default function MeetupPlanning() {
    return (
        <section className="bg-[#141414] py-20 text-white w-full border-t border-b border-[#333]">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="mb-16 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide">
                        Planejamento do Ciclo 2026
                    </h2>
                    <div className="h-2 w-24 bg-primary mt-4 rounded-full"></div>
                </div>

            <div className="flex flex-col gap-20">
                {/* Timeline */}
                <div className="flex flex-row overflow-x-auto w-full pb-6 scrollbar-hide">
                    {timeline.map((item, index) => (
                        <div key={index} className="flex flex-col items-center group min-w-[120px] md:min-w-[150px] flex-1">
                            {/* Top Text */}
                            <div className="mb-5 font-bold text-lg md:text-xl text-center tracking-wider group-hover:text-primary transition-colors">
                                {item.month}
                            </div>

                            {/* Center Line and Dot */}
                            <div className="relative flex flex-row items-center w-full h-5">
                                {/* Horizontal Line Segment */}
                                <div 
                                    className="absolute h-[2px] bg-primary z-0"
                                    style={{ 
                                        left: index === 0 ? '50%' : '0', 
                                        right: index === timeline.length - 1 ? '50%' : '0' 
                                    }}
                                ></div>
                                {/* Dot */}
                                <div className="w-full flex items-center justify-center relative z-10">
                                    <div className={`w-5 h-5 rounded-full shadow-sm transition-colors ${item.active ? 'bg-primary border-4 border-[#141414] group-hover:scale-125' : 'bg-[#141414] border-2 border-gray-500'}`}></div>
                                </div>
                            </div>

                            {/* Bottom Text */}
                            <div className={`mt-5 text-xs md:text-sm text-center font-semibold uppercase tracking-wide px-2 ${item.active ? 'text-primary' : 'text-gray-500'}`}>
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Cards (Numbers like attached image) */}
                <div className="w-full flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 w-full bg-gray-800/60 rounded-2xl overflow-hidden gap-[1px] shadow-lg">
                        {cards.map((card, index) => (
                            <div key={index} className="flex flex-col items-center justify-center py-10 px-6 bg-[#1a1a1a] hover:bg-[#1f1f1f] transition-colors">
                                <div className="text-4xl md:text-5xl font-black text-primary mb-3">
                                    {card.number}
                                </div>
                                <div className="text-sm md:text-base text-gray-400 text-center font-medium">
                                    {card.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}
