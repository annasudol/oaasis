import { useSidebar } from '../sidebar-provider'
import { cn } from '@/lib/utils'
import styles from './Sidebar.module.css'

export function Sidebar({ className, children, ...props }: React.ComponentProps<'div'>) {
  const { state } = useSidebar()

  return (
    <div
      className={cn('group peer', styles.sidebarGroup)}
      data-state={state}
      data-collapsible={state === 'collapsed' ? 'icon' : ''}
      data-side="left"
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div data-slot="sidebar-gap" className={styles.sidebarGap} />
      <div
        data-slot="sidebar-container"
        className={cn(styles.sidebarContainer, className)}
        {...props}
      >
        <div data-sidebar="sidebar" data-slot="sidebar-inner" className={styles.sidebarInner}>
          {children}
        </div>
      </div>
    </div>
  )
}
