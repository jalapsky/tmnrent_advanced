import type { Metadata } from "next";
import { Be_Vietnam_Pro } from 'next/font/google';
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['400', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Современная Инвестиционная Платформа",
  description: "Инструменты и аналитика для принятия верных инвестиционных решений.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={beVietnamPro.className}>
        {children}
      </body>
    </html>
  );
}
