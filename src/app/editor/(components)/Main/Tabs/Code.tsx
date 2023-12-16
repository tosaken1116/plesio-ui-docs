import React from 'react';

import dedent from 'dedent';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock: React.FC = () => {
  const code = dedent`
  function add(a, b) {
    return a + b;
  }`;
  return (
    <SyntaxHighlighter language="tsx" style={tomorrow}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
