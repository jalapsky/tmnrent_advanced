import React from 'react';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Путь к пассивному доходу
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Всего 4 простых шага отделяют вас от стабильных инвестиций.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-white">Оставьте заявку</h3>
                <p className="mt-2 text-text-secondary">
                  Заполните нашу простую форму, указав основную информацию о вашем автомобиле. Мы ценим ваше время, поэтому процесс занимает не более 5 минут. Это ваш первый шаг к тому, чтобы ваш автомобиль начал работать на вас.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-white">Оценка автомобиля</h3>
                <p className="mt-2 text-text-secondary">
                  Наши эксперты проведут комплексную оценку технического состояния и рыночной привлекательности вашего авто. Мы используем прозрачные критерии, чтобы определить его потенциальную доходность в нашем парке.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-white">Заключение договора</h3>
                <p className="mt-2 text-text-secondary">
                  Мы подготовим юридически чистый договор, в котором будут прописаны все условия сотрудничества, ваши гарантии и наша ответственность. Никаких скрытых пунктов — только честное партнерство.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div className="ml-4">
                <h3 className="text-2xl font-bold text-white">Получайте доход</h3>
                <p className="mt-2 text-text-secondary">
                  После подписания договора мы берем на себя все заботы: от поиска клиентов до обслуживания автомобиля. Вам остается только получать стабильные ежемесячные выплаты и следить за ростом ваших инвестиций.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-96 md:h-[500px] w-full rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
            <Image
              src="https://images.unsplash.com/photo-1580014317999-e9f1936787a5"
              alt="Стильные задние фары автомобиля"
              layout="fill"
              objectFit="cover"
              className="transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
