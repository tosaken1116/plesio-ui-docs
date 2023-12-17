import React from 'react';

export const SelectedContext = React.createContext({
  selected: {
    state: null,
    radius: null,
    outline: null,
    typography: null,
    key: 'squeeze',
    duration: '0s',
    axis: 'x',
    delay: '0s',
  },
  setSelected: () => {},
});
