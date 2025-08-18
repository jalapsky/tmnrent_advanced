'use client';

import React, { useState } from 'react';

const Calculator = () => {
  const [initialInvestment, setInitialInvestment] = useState('10000');
  const [years, setYears] = useState('5');
  const [futureValue, setFutureValue] = useState(0);

  const calculateFutureValue = (e: React.FormEvent) => {
    e.preventDefault();
    const principal = parseFloat(initialInvestment);
    const time = parseInt(years);
    const rate = 0.15; // 15% annual growth rate

    if (!isNaN(principal) && principal > 0 && !isNaN(time) && time > 0) {
      const value = principal * Math.pow(1 + rate, time);
      setFutureValue(value);
    }
  };

  // Calculate initial future value on component mount
  React.useEffect(() => {
    const principal = parseFloat(initialInvestment);
    const time = parseInt(years);
    if (!isNaN(principal) && !isNaN(time)) {
       const value = principal * Math.pow(1 + 0.15, time);
       setFutureValue(value);
    }
  }, []);

  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-text-primary">
            Смоделируйте ваше будущее
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            Наш интерактивный калькулятор поможет вам визуализировать потенциальный рост ваших инвестиций с течением времени.
          </p>
        </div>
        <div className="bg-card border border-border rounded-2xl p-8 shadow-2xl shadow-primary/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <form onSubmit={calculateFutureValue} className="flex flex-col gap-6">
              <div>
                <label htmlFor="investment" className="block text-sm font-medium text-text-secondary mb-2">Первоначальные инвестиции ($)</label>
                <input
                  id="investment"
                  type="number"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(e.target.value)}
                  className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="years" className="block text-sm font-medium text-text-secondary mb-2">Срок инвестирования (лет)</label>
                <input
                  id="years"
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button type="submit" className="w-full py-3 rounded-lg font-semibold text-white bg-primary hover:bg-accent transition-colors duration-300">
                Рассчитать
              </button>
            </form>
            <div className="text-center">
              <p className="text-lg text-text-secondary">Потенциальная стоимость через {years} лет:</p>
              <p className="text-5xl lg:text-6xl font-extrabold text-white my-2">
                ${futureValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </p>
              <p className="text-sm text-text-secondary">
                *Расчет основан на среднегодовой доходности 15%. Результаты являются гипотетическими.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
