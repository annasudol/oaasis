import React from 'react'
import { DropdownBtn } from '@/components/shared/dropdown-btn'
import styles from './Product-list.module.css'
import { ProductItems } from './product-items'

interface Product {
  subcategory: string | null
  count: number
  products?: string[]
}

interface Category {
  category: string
  count: number
  items: Product[]
}

interface ProductListProps {
  filteredProducts: Category[]
  expandedCategories: { [key: string]: boolean }
  toggleCategory: (categoryKey: string) => void
  searchTerm?: string
}

export const ProductList: React.FC<ProductListProps> = ({
  filteredProducts,
  expandedCategories,
  toggleCategory,
  searchTerm = '',
}) => {
  return (
    <div>
      {filteredProducts.map((category, categoryIndex) => {
        const categoryKey = `AWS_${categoryIndex - 1}`
        const isExpanded = expandedCategories[categoryKey as string]

        return (
          <div key={categoryKey} className={styles.categoryDivider}>
            <DropdownBtn
              isExpanded={isExpanded}
              title={`${category.category} (${category.items.length})`}
              onClick={() => toggleCategory(categoryKey)}
            />

            {isExpanded && (
              <ProductItems filteredProducts={category.items} searchTerm={searchTerm} />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default ProductList
