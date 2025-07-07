'use client'

import Image from 'next/image'
import styles from './DropDown-btn.module.css'

interface DropdownBtnProps {
  isExpanded: boolean
  title: string
  onClick: () => void
}

export const DropdownBtn = ({ isExpanded, title, onClick }: DropdownBtnProps) => {
  return (
    <button onClick={onClick} className={styles.categoryButton}>
      <div className={styles.categoryTitleContainer}>
        <Image
          src="/icons/arrow.svg"
          alt="arrow"
          width={12}
          height={12}
          className={`${styles.categoryIcon} ${!isExpanded ? styles.iconRotated : ''}`}
        />
        <span className={styles.categoryTitle}>{title}</span>
      </div>
    </button>
  )
}

export default DropdownBtn
