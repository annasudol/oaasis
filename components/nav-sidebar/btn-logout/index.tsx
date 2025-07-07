import Image from 'next/image'
import styles from './BtnLogout.module.css'

export function BtnLogout({ isCollapsed }: { isCollapsed: boolean }) {
  return (
    <button className={styles.logoutButton}>
      <div className={styles.logoutContent}>
        <div className={styles.logoutIcon}>
          <Image src="/icons/out.svg" alt="out" width={24} height={24} />
        </div>
        {!isCollapsed && <div className={styles.logoutText}>Log Out</div>}
      </div>
    </button>
  )
}
