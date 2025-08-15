import React from 'react';

const testimonialsData = [
  {
    name: 'Алексей П., владелец Audi A8',
    quote: 'Сотрудничество превзошло все ожидания. Я всегда думал, что сдача авто в аренду — это сложно и рискованно. Команда взяла на себя абсолютно все: от страхования до поиска клиентов. Машина работает, я получаю стабильный доход, не прилагая никаких усилий. Отдельное спасибо за подробные ежемесячные отчеты!',
  },
  {
    name: 'Мария К., владелица BMW X7',
    quote: 'Для меня главным фактором была безопасность моего автомобиля. Установленная система мониторинга и полное КАСКО полностью сняли все мои опасения. Уровень сервиса на высоте, а доходность оказалась даже выше прогнозируемой. Очень довольна, планирую передать в управление еще один автомобиль.',
  },
  {
    name: 'Виктор С., владелец Porsche 911',
    quote: 'Мой спорткар большую часть времени стоял в гараже. Решение отдать его в управление было одним из лучших. Теперь автомобиль не только радует редких арендаторов, но и приносит серьезную прибыль, которая полностью покрывает его обслуживание и налоги. Профессиональный подход и настоящая страсть к автомобилям.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Что говорят наши партнеры
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Мы гордимся долгосрочными и прозрачными отношениями с нашими инвесторами.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-gray-800/50 p-8 rounded-lg border border-gray-700/50 hover:border-primary/50 transition-colors duration-300 shadow-lg">
              <p className="text-text-primary italic">&quot;{testimonial.quote}&quot;</p>
              <div className="mt-6">
                <p className="font-bold text-white">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
