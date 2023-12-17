import { Stack, Typography } from '@plesiosaurus/ui';

import { ANIMATION_LINKS, COMPONENTS_LINKS } from '@/components/constants/link';
import { ComponentLink } from '@/components/ui/ComponentLink';

export const Screen: React.FC = () => (
  <div className="p-12">
    <Typography variant="h1" component="h1">
      Components
    </Typography>
    <Typography variant="p" component="p">
      components provided by plesiosaurus ui
    </Typography>
    <Stack spacing="4px">
      {COMPONENTS_LINKS.map((component) => (
        <ComponentLink {...component} key={component.href} />
      ))}
    </Stack>
    <Stack spacing="4px">
      {ANIMATION_LINKS.map((component) => (
        <ComponentLink {...component} key={component.href} />
      ))}
    </Stack>
  </div>
);
