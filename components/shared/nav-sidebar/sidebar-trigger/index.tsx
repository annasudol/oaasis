'use client'

import * as React from 'react'
import Image from 'next/image'
import { useSidebar } from '../sidebar-provider'
import styles from './SidebarTrigger.module.css'
import { cn } from '@/lib/utils'

export function SidebarTrigger({
  onClick,
  isCollapsed,
  ...props
}: React.ComponentProps<'button'> & { isCollapsed?: boolean }) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      className={cn(styles.sidebarTrigger, isCollapsed && styles.rotated)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <Image src="/icons/hide.svg" alt="Hide" width={24} height={24} />
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  )
}
