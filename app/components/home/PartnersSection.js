'use client'

import PartnerCard from "./PartnerCard";

export default function PartnerSection() {

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 312;
    }
    const slideRigth = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 312;
    }


    return (
        <>

            <h1 className="font-bold text-3xl text-center mb-10 text-secundariaDark">Parceiros</h1>
            <div className="relative flex items-center">

                <div onClick={slideLeft} className="justify-center h-72 flex items-center cursor-pointer">
                    <i className="bi bi-chevron-left text-3xl text-secundaria hover:text-secundariaDark  "></i>
                </div>

                <div id="slider" className=" flex  gap-3 w-full h-full overflow-x-scroll scroll scroll-smooth ">
                    <PartnerCard imagem="/home/partners/sydle.png" texto="A SYDLE impulsiona a transformação digital. Sua plataforma SYDLE ONE reúne soluções de BPM, CRM, E-commerce, Billing, Service Desk e mais." titulo="Sydle" />
                    <PartnerCard imagem="/home/partners/dti.png" texto="A DTI Digital é uma empresa ágil e nativa digital que oferece soluções personalizadas para acelerar a transformação digital de grandes organizações." titulo="dti digital" />
                    <PartnerCard imagem="/home/partners/ioasys.png" texto="A ioasys é uma empresa de eficiência digital que impulsiona pessoas, empresas e futuros por meio de inovações que agregam ao negócio de seus clientes." titulo="ioasys" />
                    <PartnerCard imagem="/home/partners/waymind.png" texto="A Way Minder é uma plataforma online que fortalece a resiliência emocional e previne transtornos mentais, combinando práticas de saúde mental, tecnologia e comunidade." titulo="Way Minder" />
                </div>

                <div onClick={slideRigth} className="justify-center h-72 flex items-center cursor-pointer">
                    <i className="bi bi-chevron-right text-3xl text-secundaria hover:text-secundariaDark "></i>
                </div>
            </div>

        </>

    );
}