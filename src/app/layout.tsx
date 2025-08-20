import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({ subsets: ["latin"], weight: ["400","500","700"] });

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
      <html lang="ru" className={`${beVietnamPro.className}`}>
      <body className="relative bg-background text-text-primary overflow-x-hidden">
      {/* Premium фон реализован через ::before в global.css */}
      {children}
      </body>
      </html>
  );
}