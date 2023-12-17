import React from 'react';

export const SelectedContext = React.createContext({
  selected: null,
  setSelected: () => {},
});
