import { Stack } from '@plesiosaurus/ui';

import { ComponentLink } from '../ComponentLink';

import { COMPONENTS_LINKS } from '@/components/constants/link';

export const Sidebar: React.FC = () => (
  <nav className="sticky">
    <Stack direction="column" spacing="4px" className="p-4">
      {COMPONENTS_LINKS.map((component) => (
        <ComponentLink {...component} key={component.href} />
      ))}
    </Stack>
  </nav>
);

type Props = {
  children: React.ReactNode;
};
export const PageWithSidebar: React.FC<Props> = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <main className="p-4">{children}</main>
  </div>
);
