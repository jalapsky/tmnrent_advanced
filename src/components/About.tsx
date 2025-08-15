import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
            <Image
              src="https://images.unsplash.com/photo-1607082615064-eb85a8c1f4cd"
              alt="Черный спорткар Porsche 911 ночью"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="text-left">
            <h2 className="text-4xl font-bold text-white sm:text-5xl leading-tight">
              Превратите ваш автомобиль в актив
            </h2>
            <p className="mt-6 text-lg text-text-secondary">
              Мы предлагаем больше, чем просто аренду. Мы предлагаем партнерство, в котором ваш автомобиль приносит прибыль, а вы — наслаждаетесь результатом без лишних забот.
            </p>
            <p className="mt-4 text-text-secondary">
              Если у вас есть автомобиль премиум-класса, который большую часть времени простаивает, мы готовы превратить его в источник стабильного пассивного дохода. Наша компания возьмет на себя все операционные задачи: от маркетинга до полного технического обслуживания.
            </p>
            <p className="mt-4 text-text-secondary">
              За 1 год работы с нами автомобиль может окупить от 30% до 60% своей рыночной стоимости. Наша экспертиза позволяет максимизировать доходность для каждого партнера.
            </p>
            <button className="mt-8 px-8 py-3 rounded-full text-lg font-bold text-white bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-105">
              Начать партнерство
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
