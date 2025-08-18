import React from 'react';

const About = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary">
          Мощные инструменты для разумных решений
        </h2>
        <p className="mt-6 text-lg text-text-secondary">
          Наша платформа предоставляет вам доступ к эксклюзивной аналитике, продвинутым моделям оценки и интуитивно понятным инструментам, которые помогают выявлять недооцененные активы и принимать обоснованные инвестиционные решения. Мы устраняем догадки, заменяя их данными.
        </p>
        <div className="mt-10">
          <button className="px-8 py-3 rounded-lg font-semibold text-white bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30">
            Изучить инструменты
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
