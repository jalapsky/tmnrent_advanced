'use client';

import React, { useState } from 'react';

const faqData = [
  {
    question: 'Какие требования предъявляются к автомобилю?',
    answer: 'Мы принимаем в управление автомобили премиум-класса не старше 5 лет, в отличном техническом и внешнем состоянии. Автомобиль должен иметь прозрачную юридическую историю и быть на учете в РФ.',
  },
  {
    question: 'Кто несет расходы на обслуживание, мойку и ремонт?',
    answer: 'Все расходы, связанные с плановым техническим обслуживанием, мойкой и подготовкой автомобиля к аренде, мы берем на себя. Ремонт в случае ДТП по вине арендатора или третьих лиц покрывается страховкой.',
  },
  {
    question: 'Как я могу отслеживать использование и доходность моего автомобиля?',
    answer: 'Каждый наш партнер получает доступ в личный кабинет, где в режиме реального времени можно отслеживать календарь загруженности автомобиля, текущий пробег, а также просматривать детализированные финансовые отчеты по доходам и расходам.',
  },
  {
    question: 'Что произойдет, если автомобиль попадет в ДТП или получит штраф?',
    answer: 'Автомобиль застрахован по КАСКО и ОСАГО. В случае ДТП все взаимодействие со страховыми компаниями и сервисными центрами ведут наши специалисты. Все штрафы, полученные в период аренды, оплачиваются арендатором.',
  },
  {
    question: 'Могу ли я использовать свой автомобиль для личных нужд?',
    answer: 'Да, безусловно. Вам необходимо лишь заранее согласовать с нами даты, в которые вы хотите пользоваться автомобилем, чтобы мы могли заблокировать их в календаре бронирования. Мы рекомендуем планировать личное использование как минимум за 2 недели.',
  },
];

const FaqItem = ({ item }: { item: { question: string; answer: string } }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700/50 py-6">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{item.question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
      >
        <p className="text-text-secondary pr-4">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Часто задаваемые вопросы
          </h2>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <FaqItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
