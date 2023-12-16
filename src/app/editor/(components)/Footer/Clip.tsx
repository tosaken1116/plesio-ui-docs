import React from 'react';

const Clip: React.FC = ({ x, y }: { y: number }) => {
  const width = Math.floor(Math.random() * 1500) + 150;
  return (
    <span
      className={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 `}
      style={{
        position: 'absolute',
        width: `${width}px`,
        left: `${x}px`,
        top: `${y + 15}px`,
      }}
    >
      ボタンのテキスト
    </span>
  );
};

export default Clip;
