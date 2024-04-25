'use client'
import React, { useState } from 'react';
export default function GoogleMaps() {
    const [mostrarCoreu, setMostrarCoreu] = useState(true);
    const [mostrarPraca, setMostrarPraca] = useState(false);

    const clickCoreu = () => {
        setMostrarCoreu(true);
        setMostrarPraca(false);
    };

    const clickPracaDaLiberdade = () => {
        setMostrarCoreu(false);
        setMostrarPraca(true);

    };

    return (
        <>
            <div className=' md:px-7 bg-primaria'>
                <div className='container  mx-auto py-2'>

                    <div className=" px-3 py-2 flex  justify-between   items-center">
                        <h2 className="text-secundariaDark font-bold text-2xl ">Unidades</h2>
                        <div className="flex gap-3">
                            <button id="btn-coreu " onClick={clickCoreu} className={`text-xs sm:text-lg font-bold px-3 py-1 rounded-md ${mostrarCoreu ? 'text-white bg-secundaria' : 'bg-white'
                                }`}>Coração Eucarístico</button>
                            <button id="btn-praca" onClick={clickPracaDaLiberdade} className={`text-xs sm:text-lg font-bold px-3 py-1 rounded-md ${mostrarPraca ? 'text-white bg-secundaria' : 'bg-white'
                                }`}>Praça da Liberdade</button>
                        </div>

                    </div>
                </div>





            </div>
            <iframe id="praca-da-liberdade" className={`iframe-border w-screen ${mostrarPraca ? '' : 'hidden'}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.789497313038!2d-43.93972332383477!3d-19.933273538412305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699dc57d681cf%3A0x897f2f71ae2c8900!2sPUC%20Minas%20-%20Unidade%20Pra%C3%A7a%20da%20Liberdade!5e0!3m2!1spt-BR!2sbr!4v1713981248596!5m2!1spt-BR!2sbr" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <iframe id="coreu" className={`iframe-border w-screen ${mostrarCoreu ? '' : 'hidden'}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.017460344755!2d-43.994999673834975!3d-19.92366903811319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa696fabcd470ed%3A0x79ebb3d3cea6b4ea!2sPontif%C3%ADcia%20Universidade%20Cat%C3%B3lica%20de%20Minas%20Gerais%20-%20Cora%C3%A7%C3%A3o%20Eucar%C3%ADstico!5e0!3m2!1spt-BR!2sbr!4v1713976241585!5m2!1spt-BR!2sbr" width="400" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>

    );
}