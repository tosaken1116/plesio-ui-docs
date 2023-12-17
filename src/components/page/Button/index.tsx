'use client';

import { Button, ButtonIcon, Typography } from '@plesiosaurus/ui';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { AnimateDocsProvider } from '@/components/ui/AnimateDocsProvider';
import { ComponentProvider } from '@/components/ui/ComponentProvider';

export const Screen: React.FC = () => (
  <>
    <div>
      <Typography variant="h1" component="h1">
        Button
      </Typography>
      <div>
        <Typography variant="h3" component="h3">
          Default Button
        </Typography>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {`
    const ButtonExample = () =>
      <Button>BUTTON</Button>;
        `}
        </SyntaxHighlighter>

        <ComponentProvider>
          <div>
            <Button>BUTTON</Button>
          </div>
        </ComponentProvider>
      </div>
    </div>
    <div>
      <Typography variant="h3" component="h3">
        Button with icon
      </Typography>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {`
    const ButtonExample = () =>
      <Button>
        <ButtonIcon>👍</ButtonIcon>BUTTON
      </Button>;
        `}
      </SyntaxHighlighter>
      <ComponentProvider>
        <div>
          <Button>
            <ButtonIcon>👍</ButtonIcon>BUTTON
          </Button>
        </div>
      </ComponentProvider>
    </div>
    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
    {/* @ts-ignore */}
    <AnimateDocsProvider componentName="Button" Component={Button} />
  </>
);
