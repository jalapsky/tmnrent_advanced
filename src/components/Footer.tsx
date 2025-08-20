import React from 'react';

export default function Footer() {
  return (
      <footer className="border-t border-[var(--color-border)]">
        <div className="ui-container py-10 text-center">
          <p className="muted">&copy; {new Date().getFullYear()} CarInvest. Все права защищены.</p>
        </div>
      </footer>
  )
}