import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeClient from '@/components/ThemeClient';
import clsx from 'clsx';
import { Toaster } from 'react-hot-toast';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YJ',
  description: 'Yakist jhittya',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx('bg-background m-0', inter.className)}>
        <Providers>
          <ThemeClient>{children}</ThemeClient>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
