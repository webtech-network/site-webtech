import Eventos from "./Eventos";
import Labs from "./Labs";
import RedesSociais from "./RedesSociais";
import Unidades from "./Unidades";

export default function Footer() {

  return (

    <footer className="bg-secundariaDark text-white ">
      <div className="py-4 px-4 md:px-7">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-3">


            <div className="text-center md:text-start">
              <Labs />
            </div>


            <div className="text-center md:text-start">
              <Unidades />
            </div>

            <div className="text-center md:text-start">
              <RedesSociais />
            </div>


          </div>
        </div>
      </div>
      
      <div className="bg-secundaria h-10 flex items-center justify-center">
        <p> &#169; Todos os direitos Reservados WebTech</p>
      </div>
    </footer>

  );
}
