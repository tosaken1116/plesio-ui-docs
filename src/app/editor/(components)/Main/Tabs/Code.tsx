import React, { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock: React.FC = () => {
  const [code, setCode] = useState<string>('');
  return (
    <div >
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="text-black w-full"
      />
      <SyntaxHighlighter language="tsx" style={tomorrow}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
