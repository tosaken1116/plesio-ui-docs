import React from 'react';

import Clip from './Clip';

const Footer = () => (
  <footer className="py-4 bg-gray-800 text-white text-center flex flex-col items-start gap-1 p-5 relative overflow-x-scroll h-64">
    <Clip y={0} x={Math.floor(Math.random() * 1500)} />
    <Clip y={50} x={Math.floor(Math.random() * 1500)} />
    <Clip y={100} x={Math.floor(Math.random() * 1500)} />
    <Clip y={150} x={Math.floor(Math.random() * 1500)} />
    <Clip y={200} x={Math.floor(Math.random() * 1500)} />
  </footer>
);

export default Footer;
