import { ProductDashboard } from '@/components/shared/product-dashboard'
import { Header } from '@/components/ui/header'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.mainContent}>
      <Header />
      <div className={styles.contentWrapper}>
        <ProductDashboard />
      </div>
    </div>
  )
}
