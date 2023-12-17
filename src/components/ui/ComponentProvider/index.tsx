import type { ReactNode } from 'react';

import { Stack } from '@plesiosaurus/ui';

type Props = { children: ReactNode };

export const ComponentProvider: React.FC<Props> = ({ children }) => (
  <div className=" bg-gray-300 rounded border-gray-500 text-gray-700">
    <Stack spacing="24px" className="justify-center p-12">
      {children}
    </Stack>
  </div>
);
