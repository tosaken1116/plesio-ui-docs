'use client';

import React, { useEffect, useRef, useState } from 'react';

const Clip: React.FC = ({ x, y, color = '#0ea5e9', width = 100, offset,text }) => {
  const [pos, setPos] = useState({ x: x, y: y });
  const [dragging, setDragging] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (dragging) {
        console.log(offset);
        setPos({
          x: event.clientX - offset.x - width / 2 + offset.scrollX,
          y: pos.y,
        });
      }
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, pos, ]);

  useEffect(() => {
    setPos({
      x: x,
      y: y,
    });

  }, [x,y])
  

  return (
    <button
      ref={ref}
      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white drop-shadow-2xl	"
      style={{
        position: 'absolute',
        width: `${width}px`,
        left: `${pos.x}px`,
        top: `${pos.y + 15}px`,
        userSelect: 'none',
        backgroundColor: color as string,
        opacity: width === 0 ? 0.5 : 1,
      }}
      onMouseDown={() => setDragging(true)}
    >
      {text}
    </button>
  );
};

export default Clip;
