import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-background to-gray-900 text-white py-32 sm:py-48 min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-text-primary leading-tight">
          Инвестируйте в прокат автомобилей
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto">
          Премиум-класса с доходностью до 60% годовых без рисков
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 rounded-full text-lg font-bold text-white bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30">
            Оставить заявку
          </button>
          <button className="px-8 py-3 rounded-full text-lg font-bold text-white bg-gray-700/50 border border-gray-600 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
            Узнать больше
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
