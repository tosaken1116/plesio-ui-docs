import React from 'react';

import TreeNode from './TreeNode';

const Tree = () => {
  const data = {
    id: 1,
    name: 'root',
    children: [
      {
        id: 2,
        name: 'child1',
        children: [
          {
            id: 3,
            name: 'grandchild1',
            children: [],
          },
        ],
      },
      {
        id: 4,
        name: 'child2',
        children: [],
      },
    ],
  };
  return <TreeNode node={data} />;
};

export default Tree;
