import type { ReactNode } from 'react';

import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Plesiosaurus UI',
  description: 'Plesiosaurus UI provide various animations',
};

const RootLayout = ({ children }: { children: React.ReactNode }): ReactNode => (
  <html lang="en" className="light">
    <body className={`${inter.className} gap-12 flex flex-col`}>
      {children}
    </body>
  </html>
);

export default RootLayout;
