'use client'

import * as React from 'react'
import Image from 'next/image'
import { NavMain } from '@/components/nav-main'

import { Sidebar } from '@/components/nav-sidebar/sidebar'
import { SidebarRail } from '@/components/nav-sidebar/sidebar-rail/sidebar-rail'
import { SidebarTrigger } from '@/components/nav-sidebar/sidebar-trigger'
import { cn } from '@/lib/utils'
import { NavUser } from '@/components/nav-user'
import { BtnLogout } from '@/components/nav-sidebar/btn-logout'
import { useSidebar } from '@/components/nav-sidebar/sidebar-provider'
import { Separator } from '@/components/ui/separator'

import styles from './AppSidebar.module.css'

// This is sample data.
const data = {
  nav1: [
    {
      title: 'Dashboard',
      url: '#',
      icon: 'dashboard',
      isActive: true,
    },
    {
      title: 'Demmand Planning',
      url: '#',
      icon: 'demmand',
      isActive: true,
      items: [
        {
          title: 'Building Blocks',
          url: '#',
        },
        {
          title: 'History RCA',
          url: '#',
        },
        {
          title: 'Stat/Modelling',
          url: '#',
        },
        {
          title: 'Consensus/Review',
          url: '#',
        },
      ],
    },
    {
      title: 'Supply Planning',
      url: '#',
      icon: 'supply',
      items: [
        {
          title: 'Inventory Planning',
          url: '#',
        },
        {
          title: 'Capacity Planning',
          url: '#',
        },
        {
          title: 'Product Planning',
          url: '#',
        },
        {
          title: 'Constrains Modelling',
          url: '#',
        },
      ],
    },
    {
      title: 'Revenue Growth',
      url: '#',
      icon: 'revenue',
    },
  ],
  nav2: [
    {
      title: 'Data Integration',
      url: '#',
      icon: 'data-integration',
    },
    {
      title: 'Data Explorer',
      url: '#',
      icon: 'data-explorer',
    },
    {
      title: 'Team & Permissions',
      url: '#',
      icon: 'teams-permissions',
    },
  ],
}

export function AppSidebar() {
  const { state } = useSidebar()
  return (
    <Sidebar>
      <div className={styles.mainContainer}>
        <div className={styles.topSection}>
          <div data-sidebar="header" data-slot="sidebar-header" className={styles.header}>
            <div className={cn(styles.logoContainer, state === 'collapsed' && styles.logoHidden)}>
              <Image src="/logo.svg" alt="Logo" width={95.844} height={19.51} />
            </div>
            <SidebarTrigger isCollapsed={state === 'collapsed'} />
          </div>
          <div data-slot="sidebar-content" data-sidebar="content" className={styles.content}>
            <div className={styles.navContainer}>
              <NavMain items={data.nav1} isCollapsed={state === 'collapsed'} />
            </div>
            <Separator
              data-slot="sidebar-separator"
              data-sidebar="separator"
              className={styles.separator}
              hidden={state === 'collapsed'}
            />
            <div className={styles.navContainer}>
              <NavMain items={data.nav2} isCollapsed={state === 'collapsed'} />
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <NavUser
            user={{
              name: 'Name Surname',
              email: 'Subtext',
            }}
            isCollapsed={state === 'collapsed'}
          />
          <BtnLogout isCollapsed={state === 'collapsed'} />
        </div>
      </div>
      <SidebarRail />
    </Sidebar>
  )
}
