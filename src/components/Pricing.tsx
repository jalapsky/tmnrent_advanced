import React from 'react';

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    frequency: '/ month',
    features: [
      'Доступ к базовой аналитике',
      'Ограниченное количество запросов',
      'Стандартная поддержка по email',
      'Еженедельные обзоры рынка',
    ],
    cta: 'Начать бесплатно',
    isHighlighted: false,
  },
  {
    name: 'Pro',
    price: '$42.99',
    frequency: '/ month',
    features: [
      'Полный доступ к аналитике',
      'Неограниченные запросы',
      'Продвинутые модели оценки',
      'Приоритетная поддержка',
      'Экспорт данных',
    ],
    cta: 'Выбрать Pro',
    isHighlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Свяжитесь с нами',
    frequency: '',
    features: [
      'Все возможности Pro',
      'Персональный менеджер',
      'Кастомные интеграции (API)',
      'Командный доступ',
      'Обучение и онбординг',
    ],
    cta: 'Запросить демо',
    isHighlighted: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary">
            Выберите свой план
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            Прозрачные тарифы, которые растут вместе с вашими амбициями. Начните бесплатно уже сегодня.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start lg:items-center">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border ${
                plan.isHighlighted
                  ? 'bg-primary/5 border-primary/50'
                  : 'bg-card border-border'
              } ${plan.isHighlighted ? 'scale-105' : ''} transition-transform duration-300`}
            >
              <h3 className="text-2xl font-bold text-text-primary">{plan.name}</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                {plan.frequency && <span className="ml-2 text-text-secondary">{plan.frequency}</span>}
              </div>
              <ul className="mt-8 space-y-4 text-text-secondary">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-10 py-3 rounded-lg font-semibold ${
                  plan.isHighlighted
                    ? 'bg-primary text-white hover:bg-accent'
                    : 'bg-card border border-border text-white hover:bg-border'
                } transition-colors duration-300`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
