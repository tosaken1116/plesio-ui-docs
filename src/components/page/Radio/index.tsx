'use client';

import { RadioButtonGroup, Typography } from '@plesiosaurus/ui';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { ComponentProvider } from '@/components/ui/ComponentProvider';

export const Screen: React.FC = () => (
  <>
    <div>
      <Typography variant="h1" component="h1">
        RadioButtonGroup
      </Typography>
      <div>
        <Typography variant="h3" component="h3">
          Default RadioButtonGroup
        </Typography>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {`
          const RadioButtonGroupExample = () => (
            <RadioButtonGroup
              options={['example1', 'example2', 'example3']}
              defaultValue="example1"
            />
          )
          `}
        </SyntaxHighlighter>

        <ComponentProvider>
          <RadioButtonGroup
            options={['example1', 'example2', 'example3']}
            defaultValue="example1"
          />
        </ComponentProvider>
      </div>
    </div>
    <div>
      <Typography variant="h3" component="h3">
        RadioButtonGroup zoomIn
      </Typography>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {`
          const RadioButtonGroupExample = () => (
            <RadioButtonGroup
              options={['example1', 'example2', 'example3']}
              defaultValue="example1"
              zoomIn
            />
          )
          `}
      </SyntaxHighlighter>

      <ComponentProvider>
        <RadioButtonGroup
          options={['example1', 'example2', 'example3']}
          defaultValue="example1"
          zoomIn
        />
      </ComponentProvider>
    </div>
  </>
);
