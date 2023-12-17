import React, { useState } from 'react';

import { Button } from '@plesiosaurus/ui';

import { SelectedContext } from '../../Context/SelectedContext';

const Preview = () => {
  const { selected } = React.useContext(SelectedContext);

  const [x, setX] = useState('none');
  return (
    <div
      className="flex items-center justify-center h-full my-auto mt-52"
      style={{
        transform: 'scale(5)',
      }}
    >
      <Button
        radius={selected.radius}
        outline={selected.outline}
        state={selected.state}
        typography={selected.typography}
        animationProps={{
          hover: {
            key: 'squeeze',
            option: {
              duration: '1s',
              delay: '0s',
              axis: 'x',
            },
          },
        }}
      >
        ボタン
      </Button>
    </div>
  );
};

export default Preview;
