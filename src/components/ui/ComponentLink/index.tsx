import { Typography } from '@plesiosaurus/ui';
import Link from 'next/link';

import type { ANIMATION_LINKS } from '@/components/constants/link';

import { type COMPONENTS_LINKS } from '@/components/constants/link';

export const ComponentLink = ({
  href,
  label,
  isDraft,
}:
  | (typeof COMPONENTS_LINKS)[number]
  | (typeof ANIMATION_LINKS)[number]): JSX.Element => {
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
