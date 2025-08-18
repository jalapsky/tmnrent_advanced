import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 sm:pt-48 sm:pb-32 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary leading-tight">
          Умные инвестиции в ваше будущее
        </h1>
        <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
          Откройте доступ к передовым инструментам аналитики и принимайте взвешенные решения для приумножения вашего капитала.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-white bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30">
            Начать
          </button>
          <button className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold text-white bg-transparent border border-border hover:bg-card transition-all duration-300">
            Демо
          </button>
        </div>
        <div className="mt-20">
          <p className="text-sm text-text-secondary uppercase tracking-widest">Нам доверяют</p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-gray-500">
            <span className="font-bold text-xl">Logoipsum</span>
            <span className="font-bold text-xl">Logoipsum</span>
            <span className="font-bold text-xl">Logoipsum</span>
            <span className="font-bold text-xl">Logoipsum</span>
            <span className="font-bold text-xl">Logoipsum</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
