'use client'
import { useState } from 'react'
import { Tabs, TabItem } from '@/components/ui/tabs'
import { SearchBar } from '@/components/search-bar'
import styles from './ProductDashboard.module.css'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import ProductList from '@/components/product-list'

const productData = [
  {
    category: 'AWS',
    count: 9,
    items: [
      {
        subcategory: null,
        count: 9,
        products: [
          'LALA Tequila Blanco',
          'LALA Paloma',
          '38% ABV - LALA Tequila IBC',
          'LALA Tequila Reposado',
          'LALA Mezcal 70cl',
          '55% ABV - LALA Tequila IBC',
          'LALA Tequila Blanco - 200ml',
          'LALA Tequila Blanco - 1500 ml',
          'LALA Tequila Blanco - 1750 ml',
        ],
      },
    ],
  },
  {
    category: 'AWS',
    count: 9,
    items: [
      {
        subcategory: null,
        count: 9,
        products: [
          'LALA Tequila Blanco',
          'LALA Paloma',
          '38% ABV - LALA Tequila IBC',
          'LALA Tequila Reposado',
          'LALA Mezcal 70cl',
          '55% ABV - LALA Tequila IBC',
          'LALA Tequila Blanco - 200ml',
          'LALA Tequila Blanco - 1500 ml',
          'LALA Tequila Blanco - 1750 ml',
        ],
      },
    ],
  },
]

export const ProductDashboard = () => {
  const [activeTab, setActiveTab] = useState('all-products')

  const dashboardTabs: TabItem[] = [
    { label: 'All Products', value: 'all-products' },
    { label: 'Exceptions', value: 'exceptions' },
  ]
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedCategories, setExpandedCategories] = useState<{ [key: string]: boolean }>({
    AWS_0: true,
    AWS_1: true,
    AWS_2: true,
  })

  // Track selected category
  const [collapsedAll, setCollapsedAll] = useState(false)

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName)

    if (tabName === 'All Products') {
      // Expand all categories when "All Products" is clicked
      const newExpandedState: { [key: string]: boolean } = {}
      productData.forEach((category, index) => {
        const key = category.category === 'All Products' ? 'All Products' : `AWS_${index - 1}`
        newExpandedState[key] = true
      })
      setExpandedCategories(newExpandedState)
      setCollapsedAll(false)
    }
  }

  const toggleCategory = (categoryKey: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryKey]: !prev[categoryKey],
    }))
  }

  const toggleCollapseAll = () => {
    const newState = !collapsedAll
    setCollapsedAll(newState)

    const newExpandedState: { [key: string]: boolean } = {}
    productData.forEach((category, index) => {
      const key = category.category === 'All Products' ? 'All Products' : `AWS_${index - 1}`
      newExpandedState[key] = !newState
    })
    setExpandedCategories(newExpandedState)
  }

  const filteredProducts = productData.map((category) => ({
    ...category,
    items: category.items.map((item) => ({
      ...item,
      products: item.products?.filter((product) =>
        product.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    })),
  }))

  return (
    <div>
      <div className={styles.innerContainer}>
        {/* Header Section */}
        <div className={styles.headerSection}>
          <Tabs tabs={dashboardTabs} activeTab={activeTab} handleTabClick={handleTabClick} />
          <Separator />
        </div>

        {/* Search Section */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Navigation Content */}
        <div className={styles.navigationContent}>
          {/* Collapse All Button */}
          <div className={styles.collapseButton}>
            <button onClick={toggleCollapseAll} className={styles.collapseText}>
              <Image
                src="/icons/arrow.svg"
                alt="arrow"
                width={12}
                height={12}
                className={`${styles.chevronIcon} ${!collapsedAll ? styles.chevronRotated : ''}`}
              />
              {collapsedAll ? 'Expand all' : 'Collapse all'}
            </button>
          </div>

          {/* Product Categories */}
          <ProductList
            filteredProducts={filteredProducts}
            expandedCategories={expandedCategories}
            toggleCategory={toggleCategory}
            searchTerm={searchTerm}
          />

          {/* Show message if no results */}
          {searchTerm &&
            filteredProducts.every((category) =>
              category.items.every((item) => item.products?.length === 0)
            ) && (
              <div className={styles.noResults}>
                No products found matching &quot;{searchTerm}&quot;
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

export default ProductDashboard
