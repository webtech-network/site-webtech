import Labs from "./Labs";
import Units from "./Units";
import Socials from "./Socials";

export default async function Footer() {

    return (

        <footer className="bg-secundariaDark text-white ">
            <div className="py-10 px-4 md:px-7">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

                        <div className="text-center md:text-start">
                            <Units />
                        </div>

                        <div className="text-center md:text-start">
                            <Labs />
                        </div>

                        <div className="text-center md:text-start">
                            <Socials />
                        </div>

                    </div>
                </div>
            </div>

            <div className="bg-secundaria h-10 flex items-center justify-center">
                <p> &#169; WebTech - PUC Minas</p>
            </div>
        </footer>

    );
}
