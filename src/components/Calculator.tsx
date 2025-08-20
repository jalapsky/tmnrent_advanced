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
        <section id="calculator" className="ui-section text-center">
            <div className="ui-container">
                <h2 className="h2 mb-8">Калькулятор доходности автомобиля</h2>
                <div className="flex flex-col sm:flex-row justify-center gap-4 items-center mb-6">
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => {
                            setPrice(e.target.value);
                            setProfit(0);
                        }}
                        placeholder="Стоимость вашего авто"
                        className="ui-input w-64"
                    />
                    <button
                        onClick={calculate}
                        className="ui-btn-primary"
                    >
                        Рассчитать
                    </button>
                </div>
                {profit > 0 && (
                    <p className="mt-6 text-lg">
                        Ожидаемая доходность за год: <strong className="text-[var(--color-primary)]">{profit.toLocaleString()} ₽</strong>
                    </p>
                )}
            </div>
        </section>
    );
}
