
import CardEvento from "./CardEvento";

export default function CampoEventos() {





    return (
        <>


            <h1 className="font-bold text-3xl text-center mb-10 text-secundariaDark">Eventos</h1>
            <div className="flex items-center flex-wrap justify-center gap-4">

                <CardEvento imagem="/cardEvento/card1.png" data="Ter, 17 abril - 18:20" local="Puc minas - Unidade São Gabriel" texto={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci qui distinctio eligendi, accusamus a!'} />

                <CardEvento imagem="/cardEvento/card2.png" data="Ter, 17 abril - 18:20" local="Puc minas - Unidade São Gabriel" texto={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci qui distinctio eligendi, accusamus a!'} />

                <CardEvento imagem="/cardEvento/card3.png" data="Ter, 17 abril - 18:20" local="Puc minas - Unidade São Gabriel" texto={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium adipisci qui distinctio eligendi, accusamus a!'} />


   

            </div>

        </>
    );
}