import React from 'react';

import Check from './Check';

const Main = () => (
  <div className="grid grid-cols-5 h-screen">
    <main className="col-span-3 py-10 bg-white drop-shadow" />
    <div className="col-span-2 bg-slate-600 p-10">
      <Check />
    </div>
  </div>
);

export default Main;
