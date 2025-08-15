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
    <section className="py-20">
      <div className="container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-6">Калькулятор доходности</h2>
        <form onSubmit={calculateIncome} className="flex flex-col items-center">
          <input
            type="number"
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
            placeholder="Введите стоимость вашего автомобиля"
            className="p-3 border rounded mb-4 w-full"
          />
          <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700">
            Рассчитать
          </button>
        </form>
        {yearlyIncome.max > 0 && (
          <div className="mt-8 p-6 bg-gray-100 rounded-lg">
            <h3 className="text-2xl font-bold">Ваш потенциальный доход за год:</h3>
            <p className="text-xl mt-2">
              от {yearlyIncome.min.toLocaleString('ru-RU')} до {yearlyIncome.max.toLocaleString('ru-RU')} рублей
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Calculator;
