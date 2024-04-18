'use client';
import Link from "next/link";
import { openMenu } from "./handleMenu";
import './style.css'
export default function Header() {

   return (
      <header className="header sticky top-0 bg-primaria overflow-hidden px-4 md:px-7 ">
         <nav className="container  mx-auto  py-5 ">
            <div className="flex items-center justify-between">
               <Link href="/" className="flex-shrink-0"><img src="../logo.svg" alt="" /></Link>
               <ul className="hidden md:flex gap-5">
                  <li><Link href="/sobre" className="font-bold text-secundaria hover:text-secundariaDark text-lg hover:text-xl transition-all">Sobre</Link></li>
                  <li><Link href="/labs" className="font-bold text-secundaria hover:text-secundariaDark text-lg hover:text-xl transition-all">Labs</Link></li>
                  <li><Link href="/eventos" className="font-bold text-secundaria hover:text-secundariaDark text-lg hover:text-xl transition-all">Eventos</Link></li>
                  <li><Link href="/equipe" className="font-bold text-secundaria hover:text-secundariaDark text-lg hover:text-xl transition-all">Equipe</Link></li>
                  <li><Link href="/projetos" className=" font-bold text-secundaria hover:text-secundariaDark text-lg hover:text-xl transition-all ">Projetos</Link></li>
                  <li><a className="font-bold text-secundaria hover:text-secundariaDark text-lg hover:text-xl transition-all cursor-pointer">Contato</a></li>
               </ul>
               <div className="block md:hidden">
                  <button id="menuButton" onClick={openMenu}>
                     <img src="../menuHamburger.svg" alt="" />
                  </button>
               </div>

            </div>
            <div id="menuMobile" className="md:hidden hidden">
               <ul className="flex flex-col mt-3">
                  <li><Link href="/sobre" className="font-bold text-secundariaDark text-xl transition-all">Sobre</Link></li>
                  <li><Link href="/labs" className="font-bold text-secundariaDark text-xl transition-all">Labs</Link></li>
                  <li><Link href="/eventos" className="font-bold text-secundariaDark text-xl transition-all">Eventos</Link></li>
                  <li><Link href="/equipe" className="font-bold text-secundariaDark text-xl transition-all">Equipe</Link></li>
                  <li><Link href="/projetos" className=" font-bold text-secundariaDark text-xl transition-all ">Projetos</Link></li>
                  <li><a className="font-bold text-secundariaDark text-xl transition-all cursor-pointer">Contato</a></li>
               </ul>
            </div>


         </nav>
      </header>
   );
}
