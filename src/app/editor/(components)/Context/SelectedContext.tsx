import React from 'react';

export const SelectedContext = React.createContext({
  selected: {
    state: null,
    radius: null,
    outline: null,
    typography: null,
  },
  setSelected: () => {},

});
