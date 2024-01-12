import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/header';

const inter = Inter({ subsets: ['latin'], weight: ['700', '600', '400'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-mode="dark">
      <body
        className={`${inter.className} bg-gray-light dark:bg-gray-dark relative`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
