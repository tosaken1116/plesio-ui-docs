import { useState } from 'react';
import React from 'react';

const TreeNode = ({ x, y, name }) => {
  const [pos, setPos] = useState({ x: x, y: y });

  return (
    <div
      className=" rounded-2xl bg-blue-500 p-5 select-none"
      style={{
        position: 'absolute',
        top: pos.y,
        left: pos.x + 200,
      }}
    >
      {name}
    </div>
  );
};

export default TreeNode;
