'use client';

import { Typography } from '@plesiosaurus/ui';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import { ComponentProvider } from '@/components/ui/ComponentProvider';

export const Screen: React.FC = () => (
  <>
    <div>
      <Typography variant="h1" component="h1">
        Typography
      </Typography>
      <Typography variant="h4" component="h4">
        Default Typography
      </Typography>
      <SyntaxHighlighter language="tsx" style={dracula}>
        {`
    const TypographyExample = () =>
      <Typography variant="h1" component="h1">Typography</Typography>;
        `}
      </SyntaxHighlighter>

      <ComponentProvider>
        <div>
          <Typography variant="h1" component="h1">
            Typography
          </Typography>
        </div>
      </ComponentProvider>
    </div>
    <div>
      <Typography variant="h4" component="h4">
        h2 Typography
      </Typography>
      <SyntaxHighlighter language="tsx" style={dracula}>
        {`
    const TypographyExample = () =>
      <Typography variant="h2" component="h2">Typography</Typography>;
        `}
      </SyntaxHighlighter>

      <ComponentProvider>
        <div>
          <Typography variant="h2" component="h2">
            Typography
          </Typography>
        </div>
      </ComponentProvider>
    </div>
    <div>
      <Typography variant="h4" component="h4">
        h3 Typography
      </Typography>
      <SyntaxHighlighter language="tsx" style={dracula}>
        {`
    const TypographyExample = () =>
      <Typography variant="h3" component="h3">Typography</Typography>;
        `}
      </SyntaxHighlighter>

      <ComponentProvider>
        <div>
          <Typography variant="h3" component="h3">
            Typography
          </Typography>
        </div>
      </ComponentProvider>
    </div>
    <div>
      <Typography variant="h4" component="h4">
        h4 Typography
      </Typography>
      <SyntaxHighlighter language="tsx" style={dracula}>
        {`
    const TypographyExample = () =>
      <Typography variant="h4" component="h4">Typography</Typography>;
        `}
      </SyntaxHighlighter>

      <ComponentProvider>
        <div>
          <Typography variant="h4" component="h4">
            Typography
          </Typography>
        </div>
      </ComponentProvider>
    </div>
    <div>
      <Typography variant="h4" component="h4">
        h5 Typography
      </Typography>
      <SyntaxHighlighter language="tsx" style={dracula}>
        {`
    const TypographyExample = () =>
      <Typography variant="h5" component="h5">Typography</Typography>;
        `}
      </SyntaxHighlighter>

      <ComponentProvider>
        <div>
          <Typography variant="h5" component="h5">
            Typography
          </Typography>
        </div>
      </ComponentProvider>
    </div>
    <div>
      <Typography variant="h4" component="h4">
        h6 Typography
      </Typography>
      <SyntaxHighlighter language="tsx" style={dracula}>
        {`
    const TypographyExample = () =>
      <Typography variant="h6" component="h6">Typography</Typography>;
        `}
      </SyntaxHighlighter>

      <ComponentProvider>
        <div>
          <Typography variant="h6" component="h6">
            Typography
          </Typography>
        </div>
      </ComponentProvider>
    </div>
    <div>
      <Typography variant="h4" component="h4">
        strong Typography
      </Typography>
      <SyntaxHighlighter language="tsx" style={dracula}>
        {`
    const TypographyExample = () =>
      <Typography variant="strong" component="strong">Typography</Typography>;
        `}
      </SyntaxHighlighter>

      <ComponentProvider>
        <div>
          <Typography variant="strong" component="strong">
            Typography
          </Typography>
        </div>
      </ComponentProvider>
    </div>

    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
    {/* @ts-ignore */}
    {/* <AnimateDocsProvider componentName="Typography" Component={Typography} /> */}
  </>
);
