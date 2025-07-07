import { ProductDashboard } from '@/components/product-dashboard'
import { Header } from '@/components/ui/header'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className="home">
      <div className={styles.appLayout}>
        <div className={styles.mainContent}>
          <Header />
          <div className={styles.contentWrapper}>
            <ProductDashboard />
          </div>
        </div>
      </div>
    </div>
  )
}
