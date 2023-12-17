import React, { useState } from 'react';

import dedent from 'dedent-js';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { SelectedContext } from '../../Context/SelectedContext';

const CodeBlock: React.FC = () => {
  const { selected } = React.useContext(SelectedContext);

  const uicode = dedent`
  import React from 'react';

  export const Code = () => {
    <Button
      radius= '${selected.radius}',
      outline= '${selected.outline}',
      state= '${selected.state}',
      animationProps={{
        hover: {
          key: '${selected.key}',
          option: {
            duration: '${selected.duration}',
            delay: '${selected.delay}',
            axis: '${selected.axis}',
          },
        },
      }}
    >
      ボタン
    </Button>;
  };
  
`;
  const [code, setCode] = useState<string>(uicode);
  return (
    <div>
      <SyntaxHighlighter language="tsx" style={tomorrow}>
        {code}
      </SyntaxHighlighter>
      {/* <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="text-black w-full outline-none h-48"
      /> */}
    </div>
  );
};

export default CodeBlock;
