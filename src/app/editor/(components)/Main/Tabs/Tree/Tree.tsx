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
          {
            id: 8,
            name: 'child',
            children: [],
          },
          {
            id: 9,
            name: 'child',
            children: [],
          },
        ],
      },
    ],
  };

  let depth = 0;
  const renderTree = (
    node: { id: number; name: string; children: any[] },
    posX = 0,
    posY = 50
  ): JSX.Element => {
    const childrenCount = node.children.length;

    ++depth;
    return (
      <div>
        {childrenCount !== 1 ? (
          <TreeNode
            x={posX + (childrenCount * 50) / 3}
            y={posY}
            name={`${childrenCount}`}
          />
        ) : (
          <TreeNode x={posX} y={posY} name={`${childrenCount}`} />
        )}

        {node.children.map((child: typeof data, index) =>
          renderTree(
            child,
            posX +
              (childrenCount > 1
                ? (index * 200 + (childrenCount - 1) * 50) / 3
                : index * 200),
            posY + 150
          )
        )}
      </div>
    );
  };

  return renderTree(data);
};

export default Tree;
