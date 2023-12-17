import React from 'react';

import Select from './select';

const Animation = () => {
  const animations = [
    { id: 1, name: 'radius' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Radius' },
    { id: 4, name: 'typography' },
  ];

  return (
    <fieldset className="bg-white rounded-lg p-5">
      <h1 className="text-black text-2xl font-bold pb-5">アニメーション</h1>
      <Select title="radius" list={animations} />
      <Select title="outline" list={animations} />

      <div className="space-y-5">
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-black">
              New comments
            </label>{' '}
            <span id="comments-description" className="text-gray-400">
              <span className="sr-only">New comments </span>so you always know
              what's happening.
            </span>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="candidates"
              aria-describedby="candidates-description"
              name="candidates"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="candidates" className="font-medium text-gray-900">
              New candidates
            </label>{' '}
            <span id="candidates-description" className="text-gray-500">
              <span className="sr-only">New candidates </span>who apply for any
              open postings.
            </span>
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              id="offers"
              aria-describedby="offers-description"
              name="offers"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="offers" className="font-medium text-gray-900">
              Offers
            </label>{' '}
            <span id="offers-description" className="text-gray-500">
              <span className="sr-only">Offers </span>when they are accepted or
              rejected by candidates.
            </span>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default Animation;
