import React from 'react';

import Footer from './(components)/Footer/Footer';
import Sidebar from './(components)/Sidebar/Sidebar';

const Editor = (): React.JSX.Element => (
  <div>
    {/* Static sidebar for desktop */}
    <Sidebar />

    <div className="lg:pl-72 h-screen flex flex-col">
      {/* メイン */}
      <div className="grid grid-cols-5 h-screen">
        <main className="col-span-3 py-10 bg-green-300">
          <div className="px-4 sm:px-6 lg:px-8">{/* Your content */}</div>
        </main>
        <div className="col-span-2 bg-red-500" />
      </div>
      {/* フッター */}
      <Footer />
    </div>

    {/* 右サイドバー */}
  </div>
);

export default Editor;
