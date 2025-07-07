import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import styles from './Button.module.css'

type ButtonVariant = 'default' | 'outline' | 'ghost'
type ButtonSize = 'default' | 'icon'

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: ButtonVariant
  size?: ButtonSize
  asChild?: boolean
  className?: string
}

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  const buttonClasses = [
    styles.button,
    variant === 'default' ? styles.default : '',
    variant === 'outline' ? styles.outline : '',
    variant === 'ghost' ? styles.ghost : '',
    size === 'default' ? styles.sizeDefault : '',
    size === 'icon' ? styles.sizeIcon : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ')

  return <Comp data-slot="button" className={buttonClasses} {...props} />
}

export { Button }
