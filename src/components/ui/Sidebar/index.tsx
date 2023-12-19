import { Stack, Typography } from '@plesiosaurus/ui';
import Link from 'next/link';

import { ComponentLink } from '../ComponentLink';

import { ANIMATION_LINKS, COMPONENTS_LINKS } from '@/components/constants/link';

export const Sidebar: React.FC = () => (
  <nav className="w-96">
    <div className="fixed p-4 overflow-scroll h-[calc(100vh-4rem)]">
      <Link href="/components">
        <Typography variant="h4" component="h4">
          Components
        </Typography>
      </Link>
      <Stack direction="column" spacing="4" className="p-4">
        {COMPONENTS_LINKS.map((component) => (
          <ComponentLink
            path="components"
            {...component}
            key={component.href}
          />
        ))}
      </Stack>
      <Link href="/animations">
        <Typography variant="h4" component="h4">
          Animations
        </Typography>
      </Link>
      <Stack direction="column" spacing="4" className="p-4">
        {ANIMATION_LINKS.map((component) => (
          <ComponentLink
            path="animations"
            {...component}
            key={component.href}
          />
        ))}
      </Stack>
    </div>
  </nav>
);

type Props = {
  children: React.ReactNode;
};
export const PageWithSidebar: React.FC<Props> = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <main className="p-4 w-[calc(100vw-24rem)] h-[calc(100vh-4rem)]">
      {children}
    </main>
  </div>
);
