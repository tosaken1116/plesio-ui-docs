import React from 'react';

import Footer from './(components)/Footer/Footer';
import Main from './(components)/Main/main';
import Sidebar from './(components)/Sidebar/Sidebar';

const Editor = (): React.JSX.Element => (
  <div>
    {/* Static sidebar for desktop */}
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
