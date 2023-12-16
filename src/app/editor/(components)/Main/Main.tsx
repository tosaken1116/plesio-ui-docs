import React from 'react';

import Check from './Check';

const Main: React.FC = () => {
  const tabs = ['プレビュー', 'コード', 'ツリー'];
  const [activeTab, setActiveTab] = React.useState(tabs[0]);

  return (
    <div className="grid grid-cols-5 h-screen overflow-hidden">
      <main className="col-span-3 bg-black drop-shadow m-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-3 py-2 ${
              activeTab === tab
                ? 'border-l border-t border-r rounded-t bg-slate-800'
                : ''
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
        <hr className="w-full" />
        <div className="tab-content">
          {activeTab === tabs[0] && `${tabs[0]}の内容`}
          {activeTab === tabs[1] && `${tabs[1]}の内容`}
          {activeTab === tabs[2] && `${tabs[2]}の内容`}
        </div>
      </main>

      <div className="col-span-2 bg-slate-800 p-10 grid gap-5 overflow-auto">
        <Check />
        <Check />
        <Check />
      </div>
    </div>
  );
};

export default Main;
