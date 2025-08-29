'use client'
import React, { useState } from 'react';

export default function Map() {

    const [mostrarCoreu, setMostrarCoreu] = useState(true);
    const [mostrarLourdes, setMostrarLourdes] = useState(false);

    const clickCoreu = () => {
        setMostrarCoreu(true);
        setMostrarLourdes(false);
    };

    const clickLourdes = () => {
        setMostrarCoreu(false);
        setMostrarLourdes(true);

    };

    return (
        <>
            <div className=' md:px-7 bg-primary'>
                <div className='container  mx-auto py-2'>

                    <div className=" px-3 py-2 flex  justify-between   items-center">
                        <h2 className="text-secondary-dark font-bold text-2xl ">Unidades</h2>
                        <div className="flex gap-3">
                            <button id="btn-coreu " onClick={clickCoreu} className={`text-xs sm:text-lg font-bold px-3 py-1 rounded-xl ${mostrarCoreu ? 'text-white bg-secondary' : 'bg-white'
                                }`}>Coração Eucarístico</button>
                            <button id="btn-lourdes" onClick={clickLourdes} className={`text-xs sm:text-lg font-bold px-3 py-1 rounded-xl ${mostrarLourdes ? 'text-white bg-secondary' : 'bg-white'
                                }`}>Lourdes</button>
                        </div>
                    </div>
                </div>





            </div>
            <iframe id="lourdes" className={`iframe-border w-screen ${mostrarLourdes ? '' : 'hidden'}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.8081725983247!2d-43.93868548918278!3d-19.932486881379223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699dcfc943a3b%3A0x97ae94fc166049d0!2sPUC%20Minas%20-%20Ed.%20Fernanda%20-%20Pr%C3%A9dio%204!5e0!3m2!1spt-BR!2sbr!4v1756435345976!5m2!1spt-BR!2sbr" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <iframe id="coreu" className={`iframe-border w-screen ${mostrarCoreu ? '' : 'hidden'}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.017460344755!2d-43.994999673834975!3d-19.92366903811319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa696fabcd470ed%3A0x79ebb3d3cea6b4ea!2sPontif%C3%ADcia%20Universidade%20Cat%C3%B3lica%20de%20Minas%20Gerais%20-%20Cora%C3%A7%C3%A3o%20Eucar%C3%ADstico!5e0!3m2!1spt-BR!2sbr!4v1713976241585!5m2!1spt-BR!2sbr" width="400" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>

    );
}
