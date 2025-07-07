import { Button } from '@/components/ui/button'
import Image from 'next/image'
import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>Navigation</div>
      <div className={styles.actions}>
        <Button variant="outline" size="icon" className={styles.iconButton}>
          <Image src="/icons/settings.svg" alt="Settings" width={12} height={12} />
        </Button>
        <Button variant="outline" size="icon" className={styles.iconButton}>
          <Image src="/icons/toggle.svg" alt="Copy" width={12} height={12} />
        </Button>
      </div>
    </div>
  )
}
