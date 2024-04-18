
'use client'

import CardParceiros from "./CardParceiros";
export default function CampoCard() {

    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const slideRigth = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }


    return (
        

        <>
 
            <h1 className="font-bold text-3xl text-center mb-10 text-secundariaDark">Parceiros</h1>
            <div className="relative flex items-center">

            <div onClick={slideLeft} className="justify-center h-72 flex items-center cursor-pointer">
            <i class="bi bi-chevron-left text-3xl text-secundaria hover:text-secundariaDark  "></i>
                    
                </div>



                <div id="slider" className=" flex items-center gap-3 w-full h-full overflow-x-scroll scroll scroll-smooth ">
                    <CardParceiros imagem="/cardParceiros/card1.png" texto={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci qui distinctio eligendi, accusamus a!'} />

                    <CardParceiros imagem="/cardParceiros/card1.png" texto={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci qui distinctio eligendi, accusamus a!'} />

                    <CardParceiros imagem="/cardParceiros/card1.png" texto={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci qui distinctio eligendi, accusamus a!'} />

                    <CardParceiros imagem="/cardParceiros/card1.png" texto={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci qui distinctio eligendi, accusamus a!'} />

                    <CardParceiros imagem="/cardParceiros/card1.png" texto={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci qui distinctio eligendi, accusamus a!'} />


                    <CardParceiros imagem="/cardParceiros/card1.png" texto={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci qui distinctio eligendi, accusamus a!'} />
                </div>

                <div onClick={slideRigth} className="justify-center h-72 flex items-center cursor-pointer">
                    <i class="bi bi-chevron-right text-3xl text-secundaria hover:text-secundariaDark "></i>
                </div>
            </div>

        </>

    );
}