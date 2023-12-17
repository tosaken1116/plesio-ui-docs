import type { ReactNode } from 'react';

import { Typography } from '@plesiosaurus/ui';
import Link from 'next/link';

export const Header: React.FC = () => (
  <nav>
    <Link href="/">
      <Typography variant="h1" component="p">
        🦖Plesiosaurus UI
      </Typography>
    </Link>
  </nav>
);

export const PageWithHeader: React.FC<{ children: ReactNode }> = ({
  children,
}) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
);
