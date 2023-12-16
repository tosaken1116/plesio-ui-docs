import React, { useEffect, useRef, useState } from 'react';

import Clip from './Clip';

const colors = {
  orange: '#f97316',
  green: '#22c55e',
  red: '#f43f5e',
};

const Footer: React.FC = () => {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0, scrollX: 0 });

  useEffect(() => {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = rect.left;
    setOffset({ x: offsetX, y: 0, scrollX: ref.current.scrollLeft });
  }, []);

  const toggleVisibility = () => {
    const rect = ref.current.getBoundingClientRect();
    const offsetX = rect.left;
    setOffset({ x: offsetX, y: 0, scrollX: ref.current.scrollLeft });
  };

  useEffect(() => {
    ref.current.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const timeline = {
    id: 1,
    x: 0,
    y: 0,
    color: colors.orange,
  };

  return (
    <footer
      ref={ref}
      className="py-4 bg-gray-700 text-white text-center flex flex-col items-start gap-1 p-5 relative overflow-x-scroll h-[600px] "
    >
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
            offset={offset}
            width={500}
          />
        </div>
      ))}
    </footer>
  );
};

export default Footer;
