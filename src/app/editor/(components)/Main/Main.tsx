import React from 'react';

import Check from './Check';

const Main: React.FC = () => (
  <div className="grid grid-cols-5 h-screen overflow-auto">
    <main className="col-span-3 py-10 bg-white drop-shadow" />
    <div className="col-span-2 bg-slate-800 p-10 grid gap-5 ">
      <Check />
      <Check />
      <Check />
    </div>
  </div>
);

export default Main;
