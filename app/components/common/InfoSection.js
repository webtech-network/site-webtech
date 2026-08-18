'use client'

import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Componente para o Popup
const InfoPopup = ({ children, title, description, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-4xl">
      <h2 className="text-3xl text-secondary font-semibold mb-14">{title}</h2>
      <p>{description}</p>
      <div className="text-secondary text-left text-xl" dangerouslySetInnerHTML={{ __html: children }}></div>
      <button
        onClick={onClose}
        className="absolute bg-transparent top-6 right-2 text-amber-400 px-4 py-2 rounded-md"
      >
         <FontAwesomeIcon icon={faXmark} className="text-secondary text-4xl animate-pulse" />
      </button>
    </div>
  </div>
);

const InfoCard = ({ icon, title, shortDescription, fullDescription, onClick }) => (
  <div
    onClick={onClick}
    className="p-4 bg-amber-400 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out cursor-pointer flex flex-col items-center text-center transform hover:scale-105"
  >
    <FontAwesomeIcon icon={icon} className="text-white text-4xl mb-3" />
    <h3 className="text-base font-bold mb-1">{title}</h3>
    <p className="text-sm text-gray-800 leading-tight">{shortDescription}</p>
  </div>
);

// Componente da seção principal
export default function InfoSection ({ title, cards }) {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="w-full">
      
        {/* Grid de Cards */}
        <div className="grid grid-cols-2 gap-4 w-full">
            {cards.map((card, index) => (
            <InfoCard
                key={index}
                icon={card.icon}
                title={card.title}
                shortDescription={card.shortDescription}
                fullDescription={card.fullDescription}
                onClick={() => setSelectedCard(card)}
            />
            ))}
        </div>

        {/* Popup de Detalhamento */}
        {selectedCard && (
            <InfoPopup
            title={selectedCard.title}
            onClose={() => setSelectedCard(null)}
            >
                {selectedCard.fullDescription}
            </InfoPopup>
        )}
    </div>
  );
};