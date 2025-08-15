import React from 'react';
import Image from 'next/image';

const fleetData = [
  {
    title: 'Бизнес-класс',
    description: 'Элегантность, комфорт и статус. Автомобили этого класса идеально подходят для деловых поездок и производят неизгладимое впечатление.',
    imageUrl: 'https://images.unsplash.com/photo-1594051673969-172a6f721d3c',
    alt: 'Черный седан бизнес-класса в темноте',
  },
  {
    title: 'Премиум-кроссоверы',
    description: 'Мощность, универсальность и безопасность. Эти автомобили обеспечивают уверенность на любой дороге и идеально подходят для путешествий.',
    imageUrl: 'https://images.unsplash.com/photo-1484950763426-56b5bf172dbb',
    alt: 'Силуэт внедорожника на фоне заката',
  },
  {
    title: 'Спорткары',
    description: 'Адреналин, дизайн и незабываемые эмоции. Легендарные модели, созданные для тех, кто ценит скорость и удовольствие от вождения.',
    imageUrl: 'https://images.unsplash.com/photo-1607082615064-eb85a8c1f4cd',
    alt: 'Черный спорткар Porsche 911 ночью',
  },
];

const Fleet = () => {
  return (
    <section className="py-20 sm:py-32 bg-background/70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Наш автопарк
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Мы работаем с широким спектром автомобилей премиум-сегмента, чтобы удовлетворить запросы самых требовательных клиентов.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleetData.map((car, index) => (
            <div key={index} className="group rounded-lg overflow-hidden bg-gray-800/50 shadow-lg hover:shadow-primary/30 transition-shadow duration-300">
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={car.imageUrl}
                  alt={car.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{car.title}</h3>
                <p className="mt-2 text-text-secondary">{car.description}</p>
                <button className="mt-4 px-5 py-2 rounded-full text-white font-semibold bg-primary hover:bg-accent transition-colors duration-300">
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
