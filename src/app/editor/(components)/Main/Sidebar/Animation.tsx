import React from 'react';

import Select from './select';

const key = [
  { id: 1, name: 'squeeze' },
  { id: 2, name: 'shake' },
];

const duration = [
  { id: 1, name: '0s' },
  { id: 2, name: '0.5s' },
  { id: 3, name: '1s' },
  { id: 4, name: '2s' },
  { id: 5, name: '3s' },
];

const axis = [
  { id: 1, name: 'x' },
  { id: 2, name: 'y' },
];

const Animation = () => (
  <div className="bg-white rounded-lg p-5">
    <h1 className="text-black text-2xl font-bold pb-5">アニメーション</h1>
    <Select title="key" list={key} />
    <Select title="duration" list={duration} />
    <Select title="axis" list={axis} />
    <Select title="delay" list={duration} />
  </div>
);

export default Animation;
