'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import styles from './SidebarMenu.module.css'
import { Slot } from '@radix-ui/react-slot'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { useSidebar } from '../sidebar-provider'

export function SidebarMenu({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn(styles.sidebarMenu, className)}
      {...props}
    />
  )
}

function SidebarMenuSub({ ...props }: React.ComponentProps<'ul'>) {
  return (
    <div className={styles.sidebarMenuSubContainer}>
      <div className={styles.sidebarMenuSubLine}>
        <div className={styles.sidebarMenuSubLineInner} />
      </div>
      <ul
        data-slot="sidebar-menu-sub"
        data-sidebar="menu-sub"
        className={styles.sidebarMenuSub}
        {...props}
      />
    </div>
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = 'md',
  isActive = false,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean
  size?: 'sm' | 'md'
  isActive?: boolean
}) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={styles.sidebarMenuSubButton}
      {...props}
    />
  )
}

// Now using CSS modules directly

export function SidebarMenuButton({
  asChild = false,
  isActive = false,
  size = 'default',
  tooltip,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
  size?: string
}) {
  const Comp = asChild ? Slot : 'button'
  const { state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={styles.sidebarMenuButton}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === 'string') {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        sideOffset={8}
        hidden={state !== 'collapsed'}
        {...tooltip}
      />
    </Tooltip>
  )
}

export { SidebarMenuSub, SidebarMenuSubButton }
