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
    setName('');
    setPhone('');
    setMessage('');
  };

  return (
    <section className="py-20 sm:py-32 bg-gray-900">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Готовы начать?
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Оставьте свои контактные данные, и наш менеджер свяжется с вами в ближайшее время, чтобы обсудить детали и ответить на все вопросы.
          </p>
        </div>
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 max-w-xl mx-auto shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              className="p-4 border border-gray-600 rounded-lg w-full bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ваш номер телефона"
              className="p-4 border border-gray-600 rounded-lg w-full bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Краткая информация о вашем автомобиле (марка, модель, год)"
              className="p-4 border border-gray-600 rounded-lg w-full bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
              required
            />
            <button type="submit" className="w-full px-8 py-4 rounded-lg text-lg font-bold text-white bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-105">
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
