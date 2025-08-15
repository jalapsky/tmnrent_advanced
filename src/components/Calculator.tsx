'use client';

import React, { useState } from 'react';

const Calculator = () => {
  const [carPrice, setCarPrice] = useState('');
  const [yearlyIncome, setYearlyIncome] = useState({ min: 0, max: 0 });

  const calculateIncome = (e: React.FormEvent) => {
    e.preventDefault();
    const price = parseFloat(carPrice);
    if (!isNaN(price) && price > 0) {
      setYearlyIncome({
        min: price * 0.3,
        max: price * 0.6,
      });
    }
  };

  return (
    <section className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Рассчитайте вашу прибыль
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Узнайте, сколько может приносить ваш автомобиль. Введите его примерную рыночную стоимость и получите предварительный расчет годового дохода.
          </p>
        </div>
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50 max-w-xl mx-auto shadow-lg">
          <form onSubmit={calculateIncome} className="flex flex-col items-center">
            <input
              type="number"
              value={carPrice}
              onChange={(e) => setCarPrice(e.target.value)}
              placeholder="Стоимость вашего автомобиля, ₽"
              className="p-4 border border-gray-600 rounded-lg mb-6 w-full bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="w-full px-8 py-4 rounded-lg text-lg font-bold text-white bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-105">
              Рассчитать доход
            </button>
          </form>
          {yearlyIncome.max > 0 && (
            <div className="mt-8 p-6 bg-gradient-to-br from-primary/20 to-background rounded-lg text-center border border-primary/30">
              <h3 className="text-xl font-bold text-white">Ваш потенциальный доход за год:</h3>
              <p className="text-4xl font-extrabold text-accent mt-2">
                {yearlyIncome.min.toLocaleString('ru-RU')} - {yearlyIncome.max.toLocaleString('ru-RU')} ₽
              </p>
              <p className="text-sm text-text-secondary mt-2">
                *Это предварительный расчет. Точная сумма зависит от модели автомобиля и спроса.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
