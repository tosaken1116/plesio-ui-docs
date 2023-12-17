import React, { useState } from 'react';

import { Button } from '@plesiosaurus/ui';

import { SelectedContext } from '../../Context/SelectedContext';

const Preview = () => {
  const { selected } = React.useContext(SelectedContext);

  const [x, setX] = useState('none');
  return (
    <div className="">
      <div>
        <Button
          radius={selected}
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
          {selected}
        </Button>
      </div>
      <button
        onClick={() => {
          setX(x === 'none' ? 'lg' : 'none');
        }}
        className="bg-red-500"
      >
        だだ
      </button>
    </div>
  );
};

export default Preview;
