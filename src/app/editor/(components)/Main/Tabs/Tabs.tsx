import React from 'react';

interface TabComponentProps {
  tabName: string;
  activeTab: string;
  setActiveTab: (tabName: string) => void;
}

const Tabs: React.FC<TabComponentProps> = ({
  tabName,
  activeTab,
  setActiveTab,
}) => (
  <button
    className={`tab-item ${
      activeTab === tabName ? 'border-l border-t border-r rounded-t' : ''
    }`}
    onClick={() => setActiveTab(tabName)}
  >
    {tabName}
  </button>
);

export default Tabs;
