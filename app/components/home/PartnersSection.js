'use client'

import PartnerCard from "./PartnerCard";
import SectionTitle from "../common/SectionTitle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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

            <SectionTitle>Parceiros</SectionTitle>
            <div className="relative flex items-center">

                <div onClick={slideLeft} className="justify-center h-72 flex items-center cursor-pointer">
                    <FontAwesomeIcon icon={faChevronLeft} className="text-secondary text-2xl mr-3" />
                </div>

                <div id="slider" className=" flex  gap-3 w-full h-full overflow-x-scroll scroll scroll-smooth ">
                    <PartnerCard imagem="/home/partners/sydle.png" text="A SYDLE impulsiona a transformação digital. Sua plataforma SYDLE ONE reúne soluções de BPM, CRM, E-commerce, Billing, Service Desk e mais." titulo="Sydle" />
                    <PartnerCard imagem="/home/partners/dti.png" text="A DTI Digital é uma empresa ágil e nativa digital que oferece soluções personalizadas para acelerar a transformação digital de grandes organizações." titulo="dti digital" />
                    <PartnerCard imagem="/home/partners/ioasys.png" text="A ioasys é uma empresa de eficiência digital que impulsiona pessoas, empresas e futuros por meio de inovações que agregam ao negócio de seus clientes." titulo="ioasys" />
                    <PartnerCard imagem="/home/partners/waymind.png" text="A Way Minder é uma plataforma online que fortalece a resiliência emocional e previne transtornos mentais, combinando práticas de saúde mental, tecnologia e comunidade." titulo="Way Minder" />
                </div>

                <div onClick={slideRigth} className="justify-center h-72 flex items-center cursor-pointer">
                    <FontAwesomeIcon icon={faChevronRight} className="text-secondary text-2xl ml-3" />
                </div>
            </div>

        </>

    );
}