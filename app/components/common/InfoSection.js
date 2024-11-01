'use client'

import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// Componente para o Popup
const InfoPopup = ({ children, title, description, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="relative bg-neutral-600 p-8 rounded-lg shadow-lg max-w-4xl text-center">
      <h2 className="text-3xl text-white font-semibold mb-4">{title}</h2>
      <div className="text-neutral-300 text-left text-xl" dangerouslySetInnerHTML={{ __html: children }}></div>
      <button
        onClick={onClose}
        className="absolute bg-transparent top-2 right-2 text-amber-400 px-4 py-2 rounded-md"
      >
         <FontAwesomeIcon icon={faXmark} className="text-white text-4xl animate-pulse" />
      </button>
    </div>
  </div>
);

// Componente para cada Card
const InfoCard = ({ icon, title, shortDescription, fullDescription, onClick }) => (
  <div
    onClick={onClick}
    className="p-6 bg-amber-400 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out  delay-150  cursor-pointer flex flex-col items-center text-center transform hover:scale-105"
  >
    <FontAwesomeIcon icon={icon} className="text-white text-6xl m-6" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{shortDescription}</p>
  </div>
);

// Componente da seção principal
export default function InfoSection ({ title, cards }) {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="py-12 bg-gray-100">
      
        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
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