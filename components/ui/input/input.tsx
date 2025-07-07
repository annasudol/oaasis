import * as React from 'react'
import { cn } from '@/lib/utils'
import styles from './Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'search'
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant = 'default', icon, ...props }, ref) => {
    if (variant === 'search') {
      return (
        <div className={styles.searchInputContainer}>
          <div className={styles.searchIconContainer}>
            {icon || (
              <div className={styles.searchIcon}>
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0078 12.5L9.13281 9.625C9.87891 8.71875 10.2422 7.5625 10.0625 6.28125C9.80469 4.5 8.48438 3.0625 6.70312 2.625C4.33594 2.03125 2.08594 3.78125 2.08594 6.0625C2.08594 7.875 3.27344 9.40625 4.92188 9.84375C6.15625 10.1562 7.49219 9.85938 8.48438 9.0625L11.3594 11.9375L12.0078 12.5ZM3.51562 6.0625C3.51562 4.70312 4.60938 3.60938 5.96875 3.60938C7.32812 3.60938 8.42188 4.70312 8.42188 6.0625C8.42188 7.42188 7.32812 8.51562 5.96875 8.51562C4.60938 8.51562 3.51562 7.42188 3.51562 6.0625Z"
                    fill="#122B2A"
                  />
                </svg>
              </div>
            )}
          </div>
          <input
            type={type || 'text'}
            ref={ref}
            data-slot="input"
            className={cn(styles.searchInput, className)}
            placeholder="Search"
            {...props}
          />
        </div>
      )
    }

    return (
      <input
        type={type}
        ref={ref}
        data-slot="input"
        className={cn(styles.input, className)}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export { Input }
