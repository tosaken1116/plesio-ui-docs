import type { ReactNode } from 'react';

import { Stack } from '@plesiosaurus/ui';

type Props = {
  children: ReactNode;
};

export const PageLayout: React.FC<Props> = ({ children }) => (
  <Stack spacing="4rem" direction="column">
    {children}
  </Stack>
);
