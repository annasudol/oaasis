import type { Metadata } from 'next'
import { Onest } from 'next/font/google'
import './globals.css'
import { SidebarProvider } from '@/components/nav-sidebar/sidebar-provider'
import { AppSidebar } from '@/components/app-sidebar'
import styles from './page.module.css'

const onestFont = Onest({
  variable: '--font-onest',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Oaasis - Frontend Task',
  description: 'Frontend Task for OAasis - Demand Planning',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${onestFont.variable} h-full`}>
        <SidebarProvider>
          <div className={styles.app}>
            <AppSidebar />
            <div className={styles.appContent}>{children}</div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
