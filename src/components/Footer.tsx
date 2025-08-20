import React from 'react';

export default function Footer() {
  return (
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p>&copy; {new Date().getFullYear()} CarInvest. Все права защищены.</p>
      </footer>
  )
}