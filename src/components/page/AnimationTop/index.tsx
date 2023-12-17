import { Grid, Typography } from '@plesiosaurus/ui';

import { ANIMATION_LINKS } from '@/components/constants/link';
import { ComponentLink } from '@/components/ui/ComponentLink';

export const Screen: React.FC = () => (
  <div className="p-12">
    <Typography variant="h1" component="h1">
      Animations
    </Typography>
    <Typography variant="p" component="p">
      animations provided by plesiosaurus ui
    </Typography>
    <Grid gridTemplateColumns={6}>
      {ANIMATION_LINKS.map((animation) => (
        <ComponentLink {...animation} key={animation.href} />
      ))}
    </Grid>
  </div>
);
