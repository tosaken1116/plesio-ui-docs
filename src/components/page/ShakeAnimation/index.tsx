import { Button, Typography } from '@plesiosaurus/ui';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { ComponentProvider } from '@/components/ui/ComponentProvider';

export const Screen: React.FC = () => (
  <>
    <div>
      <Typography variant="h1" component="h1">
        Shake Animation
      </Typography>
      <Typography variant="h5" component="h5">
        Shake Animation is a keyframe animation that shakes the component.
      </Typography>
    </div>
    {['1s', '2s'].map((duration) =>
      ['0s', '0.5s'].map((delay) => (
        <div key={`${duration}-${delay}`}>
          <Typography
            component="strong"
            variant="strong"
            className="w-fit"
          >{`duration: ${duration}, delay: ${delay}`}</Typography>
          <ComponentProvider>
            <Button
              animationProps={{
                hover: {
                  key: 'shake',
                  option: {
                    duration,
                    delay,
                  },
                },
              }}
            >
              hover me!
            </Button>
          </ComponentProvider>

          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
    const TypographyExample = () =>
      <Button
        animationProps={{
          hover: {
            key: 'shake',
            option: {
              duration: '${duration}',
              delay: '${delay}',
            },
          },
        }}
      >
        hover me!
      </Button>

`}
          </SyntaxHighlighter>
        </div>
      ))
    )}
  </>
);
