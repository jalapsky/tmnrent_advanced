import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center py-8 gap-6">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-text-primary">InvestPlatform</h3>
            <p className="text-sm text-text-secondary mt-1">
              © {new Date().getFullYear()} InvestPlatform, Inc. Все права защищены.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-text-secondary">
            <a href="#" className="hover:text-primary transition-colors">Платформа</a>
            <a href="#" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#" className="hover:text-primary transition-colors">Контакты</a>
            <a href="#" className="hover:text-primary transition-colors">Политика</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
