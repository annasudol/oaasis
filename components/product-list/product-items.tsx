import React from 'react'
import styles from './Product-list.module.css'

interface Product {
  subcategory: string | null
  count: number
  products?: string[]
}

interface ProductItemsProps {
  filteredProducts: Product[]
  searchTerm?: string
}

export const ProductItems: React.FC<ProductItemsProps> = ({
  filteredProducts,
  searchTerm = '',
}) => {
  return (
    <>
      <ul className={styles.productList}>
        {filteredProducts.map((item, itemIndex) => (
          <li key={`item-${itemIndex}-${item.subcategory}`} className={styles.productListItem}>
            {/* Add wrapper div to prevent first-child rule from applying */}
            {item.subcategory && (
              <div
                key={`subcategory-${itemIndex}-${item.subcategory}`}
                className={styles.productItem}
              >
                <span className={styles.subcategoryTitle}>{item.subcategory}</span>
              </div>
            )}
            {item.products?.map((product, productIndex) => (
              <div key={productIndex} className={styles.productItem}>
                <span className={styles.productText}>{product}</span>
              </div>
            ))}
          </li>
        ))}
      </ul>

      {/* Show message if no results */}
      {searchTerm && filteredProducts.every((item) => item.products?.length === 0) && (
        <div className={styles.noResults}>No products found matching &quot;{searchTerm}&quot;</div>
      )}
    </>
  )
}

export default ProductItems
