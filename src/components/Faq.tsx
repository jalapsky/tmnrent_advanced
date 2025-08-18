'use client';

import React, { useState } from 'react';

const faqData = [
  {
    question: 'Для кого предназначена ваша платформа?',
    answer: 'Наша платформа идеально подходит как для начинающих инвесторов, которые ищут надежные инструменты для старта, так и для опытных трейдеров, которым необходима глубокая аналитика и кастомные модели.',
  },
  {
    question: 'Какие данные вы используете для анализа?',
    answer: 'Мы агрегируем данные из десятков проверенных источников, включая финансовую отчетность компаний (SEC filings), рыночные данные в реальном времени, аналитические отчеты и альтернативные данные.',
  },
  {
    question: 'Насколько безопасны мои данные?',
    answer: 'Безопасность — наш главный приоритет. Мы используем сквозное шифрование, двухфакторную аутентификацию и следуем лучшим практикам отрасли для защиты ваших данных и конфиденциальности.',
  },
  {
    question: 'Могу ли я интегрировать ваши данные через API?',
    answer: 'Да, наш Enterprise-план включает доступ к API, что позволяет вам интегрировать наши данные и модели в ваши собственные системы и рабочие процессы.',
  },
];

const FaqItem = ({ item, index }: { item: { question: string; answer: string }, index: number }) => {
  const [isOpen, setIsOpen] = useState(index === 0); // Open the first item by default

  return (
    <div className="border-b border-border">
      <button
        className="w-full flex justify-between items-center text-left py-6"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-text-primary">{item.question}</span>
        <div className="text-2xl text-primary">
          {isOpen ? '−' : '+'}
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-text-secondary">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary">
            Часто задаваемые вопросы
          </h2>
        </div>
        <div className="bg-card border border-border rounded-2xl p-4 sm:p-8">
          {faqData.map((item, index) => (
            <FaqItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
