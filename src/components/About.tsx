import React from 'react';

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">Инвестируйте в сдачу автомобиля в аренду!</h2>
        <p className="text-lg mb-4">
          Если у вас уже есть автомобиль (или несколько), которым вы пользуетесь лично и который хотели бы сдавать в аренду с целью заработка, мы с радостью поставим его под управление нашей компании, обеспечим клиентами и возьмём на себя расходы на продвижение и сервис.
        </p>
        <p className="text-lg">
          За 1 год проката автомобиль может окупить от 30 до 60% своей стоимости (в зависимости от модели/комплектации).
        </p>
      </div>
    </section>
  );
};

export default About;
