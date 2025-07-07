'use client'
import styles from './NavUser.module.css'

export function NavUser({
  user,
  isCollapsed,
}: {
  user: {
    name: string
    email: string
  }
  isCollapsed: boolean
}) {
  return (
    <div className={styles.container}>
      <div className={styles.userContent}>
        <div className={styles.avatarContainer}>R</div>
        {!isCollapsed && (
          <div className={styles.userInfo}>
            <div className={styles.userName}>{user.name}</div>
            <div className={styles.userEmail}>{user.email}</div>
          </div>
        )}
      </div>
    </div>
  )
}
