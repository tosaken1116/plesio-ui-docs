import { type ReactNode } from 'react';

import { Stack, Typography } from '@plesiosaurus/ui';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { ComponentProvider } from '../ComponentProvider';

import type { AnimationProps } from '@plesiosaurus/ui/types/libs/animation/variant/AnimationFactory';

type Props = {
  Component: React.FC<{ animationProps: AnimationProps; children?: ReactNode }>;
  componentName: string;
};
type AnimateKeys = 'slide' | 'squeeze' | 'bgColorFade' | 'shake' | 'textColor';

export const AnimateDocsProvider: React.FC<Props> = ({
  Component,
  componentName,
}) => (
  <div>
    <Typography variant="h3" component="h3">
      {`Animated ${componentName}`}
    </Typography>
    <Stack direction="column" spacing="48" className=" gap-12">
      {(
        [
          { animationName: 'slide', props: { direction: 'bottom' } },
          { animationName: 'squeeze', props: { axis: 'x' } },
          { animationName: 'bgColorFade', props: { afterColor: 'secondary' } },
          { animationName: 'shake', props: {} },
        ] as { animationName: AnimateKeys; props: Record<string, unknown> }[]
      ).map(({ animationName, props }) => (
        <AnimateDoc
          key={animationName}
          animateOriginalProps={props}
          componentName={componentName}
          Component={Component}
          animateName={animationName}
        />
      ))}
    </Stack>
  </div>
);

// NOTE:animateName type to union string
const AnimateDoc = ({
  componentName,
  Component,
  animateName,
  animateOriginalProps,
}: Props & {
  animateName: AnimateKeys;
  animateOriginalProps: Record<string, unknown>;
}): JSX.Element => (
  <>
    <Typography variant="h5" component="h5">
      {animateName}
    </Typography>
    <SyntaxHighlighter language="tsx" style={dracula}>
      {`
    const ${componentName}Example = () =>
      <${componentName}
        animationProps={{
          hover: {
            key: '${animateName}',
            option: {
              duration: '1s',
              delay: '0s',
              direction: 'top',
            },
          },
        }}
      >
        hover me!
      </${componentName}>
`}
    </SyntaxHighlighter>
    <ComponentProvider>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((_, index) => (
        <div key={`button-${index}`}>
          <Typography variant="p" component="p">
            {`duration ${index + 1} s`}
          </Typography>
          <Component
            animationProps={{
              hover: {
                key: animateName,
                option: {
                  duration: `${index + 1}s`,
                  delay: '0s',
                  ...animateOriginalProps,
                },
              },
            }}
          >
            {componentName}
          </Component>
        </div>
      ))}
    </ComponentProvider>
  </>
);
