'use client';

import { Switch, Typography } from '@plesiosaurus/ui';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { ComponentProvider } from '@/components/ui/ComponentProvider';

export const Screen: React.FC = () => (
  <>
    <div>
      <Typography variant="h1" component="h1">
        Switch
      </Typography>
      <div>
        <Typography variant="h3" component="h3">
          Default Switch
        </Typography>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {`
          const SwitchExample = () => (
            <Switch />
          )
          `}
        </SyntaxHighlighter>

        <ComponentProvider>
          <Switch />
        </ComponentProvider>
      </div>
    </div>
  </>
);
