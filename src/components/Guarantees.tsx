import React from 'react';

const features = [
  {
    icon: '📊',
    title: 'Глубокая аналитика',
    description: 'Получите доступ к данным, которые действительно имеют значение. Наши алгоритмы анализируют тысячи точек данных, чтобы предоставить вам ясную картину.',
  },
  {
    icon: '🎯',
    title: 'Точные модели оценки',
    description: 'Используйте наши проприетарные модели для точной оценки активов. Мы помогаем определить истинную стоимость, а не рыночный шум.',
  },
  {
    icon: '⚡️',
    title: 'Мгновенные инсайты',
    description: 'Не тратьте время на ручной анализ. Наша платформа предоставляет готовые инсайты и рекомендации, чтобы вы могли действовать быстро и уверенно.',
  },
];

const Guarantees = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary">
            Инструменты для умных инвестиций
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            Мы предоставляем всё необходимое для принятия взвешенных и прибыльных решений на финансовых рынках.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 text-center shadow-lg hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-text-primary">{feature.title}</h3>
              <p className="mt-2 text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
