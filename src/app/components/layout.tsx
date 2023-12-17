import type { ReactNode } from 'react';

export const metadata = {
  title: 'Components',
  description: 'components top page of Plesiosaurus UI',
};

const ComponentsLayout = ({
  children,
}: {
  children: React.ReactNode;
}): ReactNode => children;

export default ComponentsLayout;
