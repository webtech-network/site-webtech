'use client';

import { useEffect } from 'react';

export default function TeamNavigation() {
    useEffect(() => {
        const handleNavigation = () => {
            const hash = window.location.hash || '#all';
            const sections = ['all', 'members', 'mentors', 'alumni', 'partners'];
            
            // Esconde todas as seções
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    element.classList.add('hidden');
                }
            });

            // Mostra a seção selecionada
            const selectedSection = document.getElementById(hash.substring(1));
            if (selectedSection) {
                selectedSection.classList.remove('hidden');
            }

            // Atualiza os estilos dos botões
            const currentHash = window.location.hash || '#all';
            const buttons = document.querySelectorAll('.nav-button');
            buttons.forEach(button => {
                const buttonHash = button.getAttribute('href');
                if (buttonHash === currentHash) {
                    button.classList.add('bg-[#1c2434]', 'text-white');
                    button.classList.remove('bg-white', 'hover:bg-[#f2bc0d]');
                } else {
                    button.classList.remove('bg-[#1c2434]', 'text-white');
                    button.classList.add('bg-white', 'hover:bg-[#f2bc0d]');
                }
            });
        };

        // Adiciona listener para mudanças no hash
        window.addEventListener('hashchange', handleNavigation);
        
        // Executa na montagem do componente
        handleNavigation();

        // Cleanup
        return () => window.removeEventListener('hashchange', handleNavigation);
    }, []);

    return null;
}