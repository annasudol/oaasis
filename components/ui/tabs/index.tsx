import React from 'react'
import styles from './Tabs.module.css'

export interface TabItem {
  label: string
  value: string
}

interface TabsProps {
  tabs: TabItem[]
  activeTab: string
  handleTabClick: (tabValue: string) => void
  title?: string
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  handleTabClick,
  title,
}) => {
  return (
    <div className={`${styles.tabsWrapper}`}>
      {title && <h3 className={styles.tabsTitle}>{title}</h3>}
      <div className={styles.tabsContainer}>
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabClick(tab.value)}
            className={`${styles.tabButton} ${activeTab === tab.value ? styles.activeTab : styles.inactiveTab}`}
            data-icon={true}
            data-tab={tab.value}
            data-type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}
