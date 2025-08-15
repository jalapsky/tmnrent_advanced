import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} TmnRentInvest. Все права защищены.</p>
        <p className="mt-2">Свяжитесь с нами: +7 (XXX) XXX-XX-XX</p>
      </div>
    </footer>
  );
};

export default Footer;
