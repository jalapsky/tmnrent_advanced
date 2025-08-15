import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: "Инвестируйте в прокат автомобилей с доходностью до 60% годовых",
  description: "Сдайте свой автомобиль премиум-класса в аренду через нашу компанию и получайте пассивный доход. Гарантии безопасности и окупаемости.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
