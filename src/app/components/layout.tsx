import type { ReactNode } from 'react';

import { PageWithHeader } from '@/components/ui/Header';

export const metadata = {
  title: 'Components',
  description: 'components top page of Plesiosaurus UI',
};

const ComponentsLayout = ({ children }: { children: ReactNode }): ReactNode => (
  <PageWithHeader>{children}</PageWithHeader>
);

export default ComponentsLayout;
