import React, { useEffect, useRef, useState } from 'react';

import Clip from './Clip';

const colors = {
  orange: '#f97316',
  green: '#22c55e',
  red: '#f43f5e',
  blue: '#38bdf8',
};

import { SelectedContext } from '../Context/SelectedContext';

const Footer: React.FC = () => {
  const { selected } = React.useContext(SelectedContext);

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
  const duration = Number(selected.duration.replace('s', ''));
  const delay = Number(selected.delay.replace('s', ''));

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
          {i / 2}
        </div>
      ))}

      <Clip
        y={0 * 50 + 50}
        x={50 + delay * 200}
        color={colors.green}
        offset={offset}
        width={duration * 200}
        text="イン"
      />
      <Clip
        y={0 * 50 + 50}
        x={50 + delay * 200 + duration * 200}
        color={colors.green}
        offset={offset}
        text="アウト"
        width={duration * 200}
      />

      <Clip
        y={1 * 50 + 50}
        x={50}
        color={colors.orange}
        offset={offset}
        text="イン"
        width={delay * 200}
      />
      <Clip
        y={1 * 50 + 50}
        x={50 + delay * 200 + duration * 200 * 2}
        color={colors.orange}
        offset={offset}
        text="アウト"
        width={delay * 200}
      />
    </footer>
  );
};

export default Footer;
