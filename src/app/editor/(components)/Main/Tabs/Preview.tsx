import React from 'react';

import { Button } from '@plesiosaurus/ui';

import { SelectedContext } from '../../Context/SelectedContext';

const Preview = () => {
  const { selected } = React.useContext(SelectedContext);

  return (
    <div
      className="flex items-center justify-center h-full my-auto mt-52"
      style={{
        transform: 'scale(7)',
      }}
    >
      <Button
        radius={selected.radius}
        outline={selected.outline}
        state={selected.state}
        // typography={selected.typography}
        animationProps={{
          hover: {
            key: selected.key,
            option: {
              duration: selected.duration,
              delay: selected.delay,
              axis: selected.axis,
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
