"use client";
import Link from "next/link";
import "./style.css";
import ModalChild from "../../contact/ModalChild";

export default function Header() {
    return (
        <header className="header sticky top-0 bg-primary overflow-hidden px-4 md:px-7 ">
            <nav className="container mx-auto py-5">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex-shrink-0 flex">
                        <div className="flex">
                            <img src="/lamp.png" className="w-10 h-full object-contain" />
                            <div className="flex relative text-neutral-900">
                                <span className="absolute font-bold text-sm block">PUC Minas</span>
                                <span className="font-bold text-3xl mt-3">WebTech</span>
                            </div>
                        </div>
                    </Link>
                    <ul className="hidden md:flex gap-5">
                        <li>
                            <Link
                                href="/about"
                                className="font-bold text-neutral-900 hover:text-neutral-900-light text-lg transition-all">
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/labs"
                                className="font-bold text-neutral-900 hover:text-neutral-900-light text-lg transition-all">
                                Labs
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/events"
                                className="font-bold text-neutral-900 hover:text-neutral-900-light text-lg transition-all">
                                Eventos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/team"
                                className="font-bold text-neutral-900 hover:text-neutral-900-light text-lg transition-all">
                                Equipe
                            </Link>
                        </li>
                        <li>
                            <ModalChild>Contato</ModalChild>
                        </li>
                    </ul>
                    <div className="block md:hidden">
                        <button id="menuButton" onClick={openMenu}>
                            <img src="/icons/menu.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div id="menuMobile" className="md:hidden hidden">
                    <ul className="flex flex-col mt-3">
                        <li className="py-2">
                            <Link
                                href="/about"
                                className="font-bold text-neutral-900-dark text-xl transition-all">
                                Sobre
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link
                                href="/labs"
                                className="font-bold text-neutral-900-dark text-xl transition-all">
                                Labs
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link
                                href="/events"
                                className="font-bold text-neutral-900-dark text-xl transition-all">
                                Eventos
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link
                                href="/team"
                                className="font-bold text-neutral-900-dark text-xl transition-all">
                                Equipe
                            </Link>
                        </li>
                        <li className="py-2">
                            <ModalChild>Contato</ModalChild>
                        </li>
                    </ul>
                </div>
            </nav>
        </header >
    );
}

export function openMenu() {
    const menu = document.querySelector('#menuMobile');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('transicao');
    }
    else {
        menu.classList.add('hidden');
        menu.classList.remove('transicao');
    }
}