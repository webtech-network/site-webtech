'use client';

import React, { useState } from 'react';
import ContactModal from './contactModal';

export default function ModalChild() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal} className='font-bold text-secundaria hover:text-secundariaDark md:text-lg text-xl hover:text-xl transition-all'>Contato</button>
      <ContactModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </>
  );
}