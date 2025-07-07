import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import styles from './Separator.module.css'

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={`${styles.separator} ${orientation === 'horizontal' ? styles.horizontal : styles.vertical} ${className || ''}`}
      {...props}
    />
  )
}

export { Separator }
