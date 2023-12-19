import { Stack, Typography } from '@plesiosaurus/ui';

import { COMPONENTS_LINKS } from '@/components/constants/link';
import { ComponentLink } from '@/components/ui/ComponentLink';

export const Screen: React.FC = () => (
  <div className="p-12 w-fit">
    <Typography variant="h1" component="h1">
      Components
    </Typography>
    <Typography variant="p" component="p">
      components provided by plesiosaurus ui
    </Typography>
    <Stack spacing="4" direction="column">
      {COMPONENTS_LINKS.map((component) => (
        <ComponentLink path="components" {...component} key={component.href} />
      ))}
    </Stack>
  </div>
);
