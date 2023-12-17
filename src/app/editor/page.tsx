'use client';

import React, { useState } from 'react';

import { SelectedContext } from './(components)/Context/SelectedContext';
import Footer from './(components)/Footer/Footer';
import Main from './(components)/Main/Main';
import Sidebar from './(components)/Sidebar/Sidebar';

const Editor = (): React.JSX.Element => {
  const [selected, setSelected] = useState({
    state: null,
    radius: null,
    outline: null,
    typography: null,
    key: 'squeeze',
    duration: '0s',
    axis: 'x',
    delay: '0s',
  });

  return (
    <SelectedContext.Provider value={{ selected, setSelected }}>
      <div>
        {/* 左サイドバー */}
        <Sidebar />

        <div className="lg:pl-72 h-screen flex flex-col">
          {/* メイン */}
          <Main />
          {/* フッター */}
          <Footer />
        </div>
      </div>
    </SelectedContext.Provider>
  );
};

export default Editor;
