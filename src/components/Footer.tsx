import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800/50 text-text-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white">TmnRentInvest</h3>
            <p className="mt-2 max-w-md">
              Инвестируйте в будущее мобильности. Ваш автомобиль — наш общий успех.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Навигация</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Как это работает</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Автопарк</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Оставить заявку</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white">Свяжитесь с нами</h4>
            <ul className="mt-4 space-y-2">
              <li>Email: contact@tmnrentinvest.ru</li>
              <li>Телефон: +7 (XXX) XXX-XX-XX</li>
            </ul>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a href="#" className="text-xl hover:text-primary transition-colors">FB</a>
              <a href="#" className="text-xl hover:text-primary transition-colors">IG</a>
              <a href="#" className="text-xl hover:text-primary transition-colors">TG</a>
            </div>
          </div>

        </div>
        <div className="mt-12 border-t border-gray-800/50 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TmnRentInvest. Все права защищены. Разработано с ❤️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
