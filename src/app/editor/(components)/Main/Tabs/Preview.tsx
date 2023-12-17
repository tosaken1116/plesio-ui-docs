import React from 'react';

import { Button } from '@plesiosaurus/ui';

const Preview = () => (
  <div className="">
    <div>
      <Button
        radius={"md"}
        animationProps={{
          hover: {
            key: 'squeeze',
            option: {
              duration: '1s',
              delay: '1s',
              axis: 'x',
            },
          },
        }}
      >
        click me!
      </Button>
    </div>
  </div>
);

export default Preview;
