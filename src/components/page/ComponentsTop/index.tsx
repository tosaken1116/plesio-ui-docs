import { Grid, Typography } from '@plesiosaurus/ui';
import Link from 'next/link';

import { COMPONENTS_LINKS } from '@/components/constants/link';

export const Screen: React.FC = () => (
  <div className="p-12">
    <Typography variant="h1" component="h1">
      Components
    </Typography>
    <Typography variant="p" component="p">
      components provided by plesiosaurus ui
    </Typography>
    <Grid gridTemplateColumns={6} className="mt-6">
      {COMPONENTS_LINKS.map((component) => (
        <ComponentLink {...component} key={component.href} />
      ))}
    </Grid>
  </div>
);

const ComponentLink = ({
  href,
  label,
  isDraft,
}: (typeof COMPONENTS_LINKS)[number]): JSX.Element => {
  if (isDraft)
    return (
      <Typography
        component="strong"
        variant="strong"
        className="text-gray-600"
        animationProps={{
          hover: {
            key: 'shake',
            option: {
              duration: '0.5s',
              delay: '0s',
            },
          },
        }}
      >
        {`${label} coming soon...`}
      </Typography>
    );
  return (
    <Link href={`/components${href}`}>
      <Typography component="strong" variant="strong">
        {label}
      </Typography>
    </Link>
  );
};
