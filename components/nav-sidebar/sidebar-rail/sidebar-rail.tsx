'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { useSidebar } from '../sidebar-provider'
import styles from './SidebarRail.module.css'

export function SidebarRail({ className, ...props }: React.ComponentProps<'button'>) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(styles.sidebarRail, styles.btn)}
      {...props}
    />
  )
}
