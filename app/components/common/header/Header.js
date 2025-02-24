"use client";
import Link from "next/link";
import "./style.css";
import ModalChild from "../../contact/ModalChild";

export default function Header() {
    return (
        <header className="header sticky top-0 bg-secondary-dark overflow-hidden px-4 md:px-7 ">
            <nav className="container mx-auto py-1">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex-shrink-0 flex">
                        <div className="flex">
                            <div className="">
                                <img src="/logo.png" className="w-40 h-auto md:w-50" />
                            </div>
                        </div>
                    </Link>
                    <ul className="hidden md:flex gap-5 nav-list">
                        <li className="nav-item">
                            <Link
                                href="/about"
                                className="font-bold text-neutral-100 hover:text-neutral-100-light text-lg transition-all">
                                Sobre
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/labs"
                                className="font-bold text-neutral-100 hover:text-neutral-100-light text-lg transition-all">
                                Labs
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/events"
                                className="font-bold text-neutral-100 hover:text-neutral-100-light text-lg transition-all">
                                Eventos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/journey"
                                className="font-bold text-neutral-100 hover:text-neutral-100-light text-lg transition-all">
                                Journey
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                href="/team"
                                className="font-bold text-neutral-100 hover:text-neutral-100-light text-lg transition-all">
                                Equipe
                            </Link>
                        </li>
                        <li className="nav-item">
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
                                className="font-bold text-neutral-100 text-xl transition-all">
                                Sobre
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link
                                href="/labs"
                                className="font-bold text-neutral-100 text-xl transition-all">
                                Labs
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link
                                href="/events"
                                className="font-bold text-neutral-100 text-xl transition-all">
                                Eventos
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link
                                href="/journey"
                                className="font-bold text-neutral-100 text-xl transition-all">
                                Journey
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link
                                href="/team"
                                className="font-bold text-neutral-100 text-xl transition-all">
                                Equipe
                            </Link>
                        </li>
                        <li className="py-2">
                            <ModalChild  className="text-neutral-100">Contato</ModalChild>
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
        menu.classList.add('transition');
    }
    else {
        menu.classList.add('hidden');
        menu.classList.remove('transition');
    }
}