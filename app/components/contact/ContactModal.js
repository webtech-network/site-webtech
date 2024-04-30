'use client';
import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000 // Defina um valor alto para garantir que o overlay fique por cima de tudo
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '450px',
        width: '90%',
        padding: '25px',
        borderRadius: '20px',
        position: 'absolute',
        zIndex: 1001 // Defina um valor alto para garantir que o modal fique por cima de tudo
    }
};

export default function ContactModal({ isOpen, onRequestClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, subject, message } = formData;
        if (name && email && phone && subject && message) {
            const emailBody = `
                        <html>
                              <body>
                                    <p><strong>Nome:</strong> ${name}</p>
                                    <p><strong>Email:</strong> ${email}</p>
                                    <p><strong>Telefone:</strong> ${phone}</p>
                                    <p><strong>Assunto:</strong> ${subject}</p>
                                    <p><strong>Mensagem:</strong></p>
                                    <p>${message}</p>
                              </body>
                        </html>
                  `;
            const mailtoLink = `mailto:webtech.pucminas@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
            window.location.href = mailtoLink;
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            onRequestClose();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };


    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            ariaHideApp={false}
        >
            <form className='text-xl font-bold z-50 ' onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-base text-secondary-dark">E-mail</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 text-secondary-dark w-full border rounded-xl font-normal text-base" />
                </div>
                <div className="mb-4 grid gap-5 grid-cols-2">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-base text-secondary-dark">Nome</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 text-secondary-dark w-full border rounded-xl font-normal text-base" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-base text-secondary-dark">Telefone</label>
                        <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="mt-1 p-2 text-secondary-dark w-full border rounded-xl font-normal text-base" />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block text-base text-secondary-dark">Assunto</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="mt-1 p-2 text-secondary-dark w-full border rounded-xl font-normal text-base" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-base text-secondary-dark">Mensagem</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="mt-1 p-2 text-secondary-dark w-full border rounded-xl font-normal text-base"></textarea>
                </div>
                <button id="submitButton" type="submit" className="text-base text-secondary-dark float-right bg-primary hover:bg-primary-light px-4 py-2 rounded-xl">Enviar</button>
            </form>
            <style jsx>{`
        #submitButton:active {
          transform: scale(0.95); 
        }
      `}</style>
        </Modal>
    );
}