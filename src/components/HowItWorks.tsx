import React from 'react';

const steps = [
  {
    title: 'Регистрация и настройка',
    description: 'Создайте аккаунт за несколько минут и настройте свой профиль. Укажите свои инвестиционные цели и предпочтения, чтобы мы могли подобрать для вас релевантные инструменты.',
  },
  {
    title: 'Анализ и исследование',
    description: 'Используйте наши мощные фильтры и модели оценки для поиска и анализа активов. Сравнивайте компании, изучайте отчеты и выявляйте скрытые возможности.',
  },
  {
    title: 'Принятие решений',
    description: 'На основе собранных данных принимайте взвешенные инвестиционные решения. Наша платформа предоставит всю необходимую информацию в удобном для анализа виде.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="lg:pr-12">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary">
              Основывайтесь на данных, а не на догадках
            </h2>
            <p className="mt-6 text-lg text-text-secondary">
              Наш процесс построен так, чтобы дать вам максимальный контроль и уверенность на каждом этапе инвестирования.
            </p>
            <div className="mt-10 space-y-8 border-l-2 border-border pl-8">
              {steps.map((step, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-text-primary">{step.title}</h3>
                  <p className="mt-2 text-text-secondary">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="h-96 w-full bg-card border border-border rounded-xl p-6 flex flex-col justify-between shadow-2xl shadow-primary/10">
            <div className="flex justify-between items-center text-sm text-text-secondary">
              <span>AAPL</span>
              <span>+1.25%</span>
            </div>
            <div className="flex-grow flex items-end space-x-2">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-full bg-border rounded-t-sm" style={{ height: `${Math.random() * 60 + 20}%` }}></div>
              ))}
              <div className="w-full bg-green-500 rounded-t-sm" style={{ height: '85%' }}></div>
            </div>
            <div className="flex justify-between items-center text-xs text-text-secondary pt-2">
              <span>1Д</span>
              <span>5Д</span>
              <span className="text-white bg-primary/20 px-2 py-1 rounded">1М</span>
              <span>6М</span>
              <span>1Г</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
