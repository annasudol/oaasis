'use client'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { SidebarMenuButton } from '@/components/nav-sidebar/sidebar-menu/sidebar-menu'
import { useSidebar } from '@/components/nav-sidebar/sidebar-provider'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'
import styles from './NavMain.module.css'
import { SubmenuConnector } from './SubmenuConnector'

export function NavMain({
  items,
  isCollapsed,
}: {
  items: {
    title: string
    url: string
    icon: string
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
  isCollapsed?: boolean
}) {
  const { state } = useSidebar()
  // Track open state for each item
  const [openItems, setOpenItems] = useState<Record<string, boolean>>(
    Object.fromEntries(items.map((item) => [item.title, !!item.isActive]))
  )

  const handleToggle = (title: string, isOpen: boolean) => {
    setOpenItems((prev) => ({ ...prev, [title]: isOpen }))
  }

  return (
    <div className={styles.container}>
      {items.map((item) => (
        <Collapsible
          key={item.title}
          disabled={state === 'collapsed'}
          defaultOpen={item.isActive}
          className={openItems[item.title] ? styles.collapsibleOpen : ''}
          onOpenChange={(isOpen) => handleToggle(item.title, isOpen)}
        >
          <div className={cn(styles.menuItem, state === 'collapsed' && styles.menuItemCollapsed)}>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={item.title} className={styles.menuButton}>
                <div className={styles.menuButtonContent}>
                  <div className={styles.menuIcon}>
                    <Image
                      src={`/icons/${item.icon}.svg`}
                      alt={item.title}
                      width={20}
                      height={20}
                    />
                  </div>
                  {state === 'expanded' && (
                    <>
                      <div className={styles.menuText}>{item.title}</div>
                      {item.items && (
                        <div className={styles.menuArrow}>
                          <Image
                            src="/icons/arrow-down.svg"
                            alt="arrow-down"
                            width={24}
                            height={24}
                          />
                        </div>
                      )}
                    </>
                  )}
                </div>
              </SidebarMenuButton>
            </CollapsibleTrigger>
          </div>
          {item.items && !isCollapsed && (
            <CollapsibleContent>
              <div className={styles.subMenuWrapper}>
                <div className={styles.connectorContainer}>
                  <SubmenuConnector itemCount={item.items.length} />
                </div>
                <div className={styles.subMenuItems}>
                  {item.items?.map((subItem) => (
                    <div key={subItem.title} className={styles.subMenuItem}>
                      <a href={subItem.url} className={styles.subMenuButton}>
                        <div className={styles.menuButtonContent}>
                          <div className={styles.subMenuText}>{subItem.title}</div>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </CollapsibleContent>
          )}
        </Collapsible>
      ))}
    </div>
  )
}
