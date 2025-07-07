import styles from './Search-bar.module.css'
import Image from 'next/image'

interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (value: string) => void
}

export const SearchBar = ({ searchTerm, setSearchTerm }: SearchBarProps) => {
  return (
    <div className={styles.searchContainer}>
      <Image src="/icons/search.svg" alt="Search" width={25} height={25} />

      <input
        type="text"
        placeholder="Search"
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
