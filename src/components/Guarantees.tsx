import React from 'react';

const securityGuarantees = [
  { icon: '📜', text: 'Каждый клиент подписывает юридически сильный договор, обязывающий его к полной материальной ответственности.' },
  { icon: '💰', text: 'Каждый клиент оставляет солидный залог за автомобиль на все время поездки и 14 дней после для покрытия возможных штрафов.' },
  { icon: '🛡️', text: 'Автомобиль будет застрахован по максимальному тарифу КАСКО и ОСАГО в ведущих страховых компаниях.' },
  { icon: '🛰️', text: 'В автомобиле установлена спутниковая мониторинговая система с возможностью дистанционного контроля и блокировки двигателя.' },
];

const paybackGuarantees = [
  { icon: '📊', text: 'Подтвержденная статистика загруженности нашего автопарка на уровне 70-85% даже для элитных моделей.' },
  { icon: '📈', text: 'Прозрачный расчет P&L (прибыли и убытков) по вашему автомобилю, доступный в личном кабинете в любое время.' },
  { icon: '📄', text: 'Вся история выплат нашим партнерам задокументирована и может быть предоставлена для ознакомления.' },
  { icon: '⚙️', text: 'Мы берем на себя маркетинг и продвижение, обеспечивая постоянный поток надежных клиентов.' },
];


const Guarantees = () => {
  return (
    <section className="py-20 sm:py-32 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">
            Ваши инвестиции под надежной защитой
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
            Мы создали многоуровневую систему гарантий, которая обеспечивает безопасность вашего имущества и стабильность вашего дохода.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Security Guarantees Card */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
            <h3 className="text-3xl font-bold text-primary mb-6">Гарантии безопасности</h3>
            <ul className="space-y-4">
              {securityGuarantees.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-2xl mr-4">{item.icon}</span>
                  <span className="text-text-secondary">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Payback Guarantees Card */}
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
            <h3 className="text-3xl font-bold text-primary mb-6">Гарантии окупаемости</h3>
            <ul className="space-y-4">
              {paybackGuarantees.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-2xl mr-4">{item.icon}</span>
                  <span className="text-text-secondary">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Guarantees;
