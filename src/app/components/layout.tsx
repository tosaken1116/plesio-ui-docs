import type { ReactNode } from 'react';

import { PageWithHeader } from '@/components/ui/Header';
import { PageLayout } from '@/components/ui/PageLayout';
import { PageWithSidebar } from '@/components/ui/Sidebar';

export const metadata = {
  title: 'Components',
  description: 'components top page of Plesiosaurus UI',
};

const ComponentsLayout = ({ children }: { children: ReactNode }): ReactNode => (
  <PageWithHeader>
    <PageWithSidebar>
      <PageLayout>{children}</PageLayout>
    </PageWithSidebar>
  </PageWithHeader>
);

export default ComponentsLayout;
