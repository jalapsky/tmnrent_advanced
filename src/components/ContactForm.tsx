'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle form submission,
    // e.g., send the data to a server.
    console.log({ name, phone, message });
    alert('Спасибо за вашу заявку! Мы скоро с вами свяжемся.');
  };

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-6">Оставить заявку</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ваше имя"
            className="p-3 border rounded mb-4 w-full"
            required
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ваш номер телефона"
            className="p-3 border rounded mb-4 w-full"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Краткая информация о вашем автомобиле (марка, модель, год)"
            className="p-3 border rounded mb-4 w-full h-32"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
