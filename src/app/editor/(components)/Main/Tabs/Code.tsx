import React, { useState } from 'react';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock: React.FC = () => {
  const [code, setCode] = useState<string>('');
  return (
    <div>
      <SyntaxHighlighter language="tsx" style={tomorrow}>
        {code}
      </SyntaxHighlighter>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="text-black w-full outline-none h-48"
      />
    </div>
  );
};

export default CodeBlock;
