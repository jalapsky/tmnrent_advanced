'use client'

import { useState } from 'react';

export default function Calculator() {
    const [price, setPrice] = useState<string>('');
    const [profit, setProfit] = useState<number>(0);

    const calculate = () => {
        const numericPrice = parseFloat(price);
        if (!isNaN(numericPrice)) {
            setProfit(numericPrice * 0.45);
        } else {
            setProfit(0);
        }
    };

    return (
        <section id="calculator" className="py-20 px-6 text-center bg-white">
            <h2 className="text-3xl font-bold mb-8">Калькулятор доходности автомобиля</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-6">
                <input
                    type="number"
                    value={price}
                    onChange={(e) => {
                        setPrice(e.target.value);
                        setProfit(0);
                    }}
                    placeholder="Стоимость вашего авто"
                    className="p-4 rounded-lg border w-64 text-gray-900"
                />
                <button
                    onClick={calculate}
                    className="bg-yellow-500 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
                >
                    Рассчитать
                </button>
            </div>
            {profit > 0 && (
                <p className="mt-6 text-xl text-gray-800">
                    Ожидаемая доходность за год: <strong>{profit.toLocaleString()} ₽</strong>
                </p>
            )}
        </section>
    );
}
