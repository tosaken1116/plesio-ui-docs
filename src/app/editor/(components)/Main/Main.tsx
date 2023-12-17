import React from 'react';

import Animation from './Sidebar/Animation';
import Shape from './Sidebar/Shape';
import Code from './Tabs/Code';
import Preview from './Tabs/Preview';
import Tree from './Tabs/Tree/Tree';
import { SelectedContext } from '../Context/SelectedContext';

const Main: React.FC = () => {
  const tabs = ['プレビュー', 'コード', 'ツリー'];
  const [activeTab, setActiveTab] = React.useState(tabs[0]);
  const [selected, setSelected] = React.useState(null);

  return (
    <SelectedContext.Provider value={{ selected, setSelected }}>
      <div className="grid grid-cols-5 h-screen overflow-hidden">
        <main className="col-span-3 bg-white drop-shadow m-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-3 py-2 text-black select-none ${
                activeTab === tab ? '  bg-gray-300 ' : ''
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
          <span className="w-full border-t border-black block" />

          <div className="tab-content relative">
            {activeTab === tabs[0] && <Preview />}
            {activeTab === tabs[1] && <Code />}
            {activeTab === tabs[2] && <Tree />}
          </div>
        </main>
        <div className="col-span-2 bg-slate-800 px-10 grid gap-5 overflow-auto py-5">
          <Animation />
          <Shape />
        </div>
      </div>
    </SelectedContext.Provider>
  );
};

export default Main;
