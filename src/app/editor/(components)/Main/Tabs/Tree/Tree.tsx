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
            name: 'child',
            children: [],
          },
        ],
      },
      {
        id: 4,
        name: 'child2',
        children: [
          {
            id: 5,
            name: 'child',
            children: [],
          },
          {
            id: 6,
            name: 'child',
            children: [],
          },
          {
            id: 7,
            name: 'child',
            children: [],
          },
        ],
      },
    ],
  };

  const renderTree = (
    node: { id: number; name: string; children: any[] },
    posX = 0,
    posY = 50
  ): JSX.Element => (
    <div>
      <TreeNode x={posX} y={posY} name={node.name} />

      {node.children.map((child, index) =>
        renderTree(child, posX + index * 100, posY + 150)
      )}
    </div>
  );

  return renderTree(data);
};

export default Tree;
