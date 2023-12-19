import type { ReactNode } from 'react';

import { Typography } from '@plesiosaurus/ui';
import Link from 'next/link';

export const Header: React.FC = () => (
  <nav className="h-16">
    <div className="backdrop-blur-sm w-full h-16 fixed">
      <Link href="/">
        <Typography variant="h1" component="p">
          🦖Plesiosaurus UI
        </Typography>
      </Link>
    </div>
  </nav>
);

export const PageWithHeader: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <div>
    <Header />
    <main className="h-[calc(100vh-4rem)]">{children}</main>
  </div>
);
