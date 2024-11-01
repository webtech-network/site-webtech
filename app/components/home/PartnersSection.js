'use client'

import PartnerCard from "./PartnerCard";
import SectionTitle from "../common/SectionTitle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function PartnerSection({partners}) {

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
            <div className="relative flex items-center">

                <div onClick={slideLeft} className="justify-center h-72 flex items-center cursor-pointer">
                    <FontAwesomeIcon icon={faChevronLeft} className="text-secondary text-2xl mr-3" />
                </div>

                <div id="slider" className=" flex  gap-3 w-full h-full overflow-x-scroll scroll scroll-smooth ">

                    {partners.map((partner, index) => (
                        <PartnerCard
                            key={index}
                            imagem={partner.imagem}
                            text={partner.descricao}
                            titulo={partner.titulo}
                        />
                    ))}                    
                </div>

                <div onClick={slideRigth} className="justify-center h-72 flex items-center cursor-pointer">
                    <FontAwesomeIcon icon={faChevronRight} className="text-secondary text-2xl ml-3" />
                </div>
            </div>

        </>

    );
}