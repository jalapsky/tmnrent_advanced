'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    alert('Спасибо за ваше сообщение! Мы скоро с вами свяжемся.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary">
            Свяжитесь с нами
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            Есть вопросы или предложения? Мы всегда готовы помочь. Заполните форму ниже, и наша команда ответит вам в кратчайшие сроки.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl shadow-primary/10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ваш Email"
              className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ваше сообщение"
              className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
              required
            />
            <button type="submit" className="w-full py-3 rounded-lg font-semibold text-white bg-primary hover:bg-accent transition-colors duration-300">
              Отправить сообщение
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
