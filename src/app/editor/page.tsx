'use client';

import React from 'react';

import Footer from './(components)/Footer/Footer';
import Main from './(components)/Main/Main';
import Sidebar from './(components)/Sidebar/Sidebar';

const Editor = (): React.JSX.Element => (
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
);

export default Editor;
