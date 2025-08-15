import React from 'react';

const Guarantees = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="px-4">
            <h3 className="text-2xl font-bold mb-4">Гарантии безопасности</h3>
            <ul className="list-disc list-inside">
              <li className="mb-2">Каждый клиент подписывает юридически сильный договор, обязующий его к выплате возможных штрафов, оплате ДТП, поломок и пр.</li>
              <li className="mb-2">Каждый клиент оставляет залог за автомобиль на все время поездки и 14 дней после.</li>
              <li className="mb-2">Автомобиль будет застрахован КАСКО и ОСАГО.</li>
              <li className="mb-2">В автомобиле будет установлена специальная мониторинговая система с различными датчиками и маячками.</li>
            </ul>
          </div>
          <div className="px-4">
            <h3 className="text-2xl font-bold mb-4">Гарантии окупаемости</h3>
            <p className="mb-4">Средняя загруженность нашего автопарка составляет 70% даже на машины элитного-класса и мы можем подтвердить это:</p>
            <ul className="list-disc list-inside">
              <li className="mb-2">Статистикой загруженности из СRМ-системы.</li>
              <li className="mb-2">Подсчётов Р&L в дельте от месяца до года по любому автомобилю.</li>
              <li className="mb-2">Документацией выплат партнёрам.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
