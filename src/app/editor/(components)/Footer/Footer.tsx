import React from 'react';

import Clip from './Clip';

const colors = {
  orange: '#f97316',
  green: '#22c55e',
  red: '#f43f5e',
};

const Footer = () => (
  <footer className="py-4 bg-gray-800 text-white text-center flex flex-col items-start gap-1 p-5 relative overflow-x-scroll h-96">
    {Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        style={{
          position: 'absolute',
          left: `${i * 100 + 50}px`,
          userSelect: 'none',
          borderLeft: '1px solid #888888',
          height: '100%',
        }}
      >
        {i / 10}
      </div>
    ))}

    {Array.from({ length: 5 }, (_, i) => (
      <div key={i}>
        <Clip
          y={i * 50 + 50}
          x={Math.floor(Math.random() * 1500)}
          color={
            colors[
              Object.keys(colors)[
                Math.floor(Math.random() * Object.keys(colors).length)
              ]
            ]
          }
        />
      </div>
    ))}
  </footer>
);

export default Footer;
