import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

// ─── Loading Spinner ──────────────────────────────────────────────────────────

function LoadingSpinner({ className }: { className?: string }) {
  return (
    <svg
      className={cn('animate-spin', className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="10"
        r="8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeOpacity="0.3"
      />
      <path
        d="M10 2a8 8 0 018 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ─── CVA Variants ─────────────────────────────────────────────────────────────

const buttonVariants = cva(
  'inline-flex items-center justify-center font-body font-medium transition-colors duration-150 focus-visible:outline-none disabled:cursor-not-allowed',
  {
    variants: {
      hierarchy: {
        primary: [
          'bg-bg-brand-solid text-text-white rounded-sm',
          'hover:bg-bg-brand-solid-hover',
          'focus-visible:shadow-focus-ring-alt',
          'disabled:bg-bg-disabled disabled:border disabled:border-border-disabled-subtle disabled:text-fg-disabled',
        ],
        gray: [
          'bg-bg-primary-solid text-text-white rounded-sm',
          'hover:bg-bg-primary-solid-hover',
          'focus-visible:shadow-focus-ring-gray',
          'disabled:bg-bg-disabled disabled:border disabled:border-border-disabled-subtle disabled:text-fg-disabled',
        ],
        secondary: [
          'bg-bg-primary border border-border-primary text-text-primary rounded-sm',
          'hover:bg-bg-primary-hover',
          'focus-visible:shadow-focus-ring',
          'disabled:bg-bg-disabled disabled:border-border-disabled-subtle disabled:text-fg-disabled',
        ],
        tertiary: [
          'bg-transparent text-text-primary rounded-sm',
          'hover:bg-bg-primary-hover',
          'focus-visible:shadow-focus-ring',
          'disabled:text-fg-disabled',
        ],
        'link-color': [
          'bg-transparent text-text-link',
          'hover:text-text-link-hover',
          'focus-visible:shadow-focus-ring',
          'disabled:text-fg-disabled',
        ],
        'link-gray': [
          'bg-transparent text-text-tertiary underline',
          'hover:text-text-secondary',
          'focus-visible:shadow-focus-ring-gray',
          'disabled:text-fg-disabled',
        ],
      },
      size: {
        sm: 'text-text-sm',
        md: 'text-text-sm',
        lg: 'text-text-md',
        xl: 'text-text-md',
      },
      iconOnly: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // Text button: padding + gap by size
      { size: 'sm', iconOnly: false, class: 'px-lg py-md gap-xs' },
      { size: 'md', iconOnly: false, class: 'px-lg-xl py-md-lg gap-xs' },
      { size: 'lg', iconOnly: false, class: 'px-xl py-md-lg gap-sm' },
      { size: 'xl', iconOnly: false, class: 'px-xl-2xl py-lg gap-sm' },
      // Icon-only: symmetric padding (square)
      { size: 'sm', iconOnly: true, class: 'p-md' },
      { size: 'md', iconOnly: true, class: 'p-md-lg' },
      { size: 'lg', iconOnly: true, class: 'p-md-lg' },
      { size: 'xl', iconOnly: true, class: 'p-lg' },
      // Link buttons: no padding (comes after size compounds → wins via twMerge)
      { hierarchy: 'link-color', class: 'p-0 gap-xs' },
      { hierarchy: 'link-gray', class: 'p-0 gap-xs' },
    ],
    defaultVariants: {
      hierarchy: 'primary',
      size: 'md',
      iconOnly: false,
    },
  }
)

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'>,
    VariantProps<typeof buttonVariants> {
  /** 버튼 시각적 계층 */
  hierarchy?: 'primary' | 'gray' | 'secondary' | 'tertiary' | 'link-color' | 'link-gray'
  /** 버튼 크기 */
  size?: 'sm' | 'md' | 'lg' | 'xl'
  /** 아이콘만 표시 (텍스트 없음) */
  iconOnly?: boolean
  /** 앞쪽 아이콘 */
  leadingIcon?: React.ReactNode
  /** 뒤쪽 아이콘 */
  trailingIcon?: React.ReactNode
  /** 로딩 상태 */
  isLoading?: boolean
}

// ─── Component ────────────────────────────────────────────────────────────────

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      hierarchy = 'primary',
      size = 'md',
      iconOnly = false,
      leadingIcon,
      trailingIcon,
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading
    const iconSizeClass = size === 'lg' || size === 'xl' ? 'w-6 h-6' : 'w-5 h-5'

    // 로딩 시 배경색을 hover 상태로 변경 (Primary, Gray)
    const loadingBgMap: Partial<Record<NonNullable<typeof hierarchy>, string>> = {
      primary: 'bg-bg-brand-solid-hover',
      gray: 'bg-bg-primary-solid-hover',
    }
    const loadingBgClass = isLoading ? loadingBgMap[hierarchy ?? 'primary'] : undefined

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          buttonVariants({ hierarchy, size, iconOnly }),
          loadingBgClass,
          className
        )}
        {...props}
      >
        {isLoading ? (
          <>
            <LoadingSpinner className={iconSizeClass} />
            {!iconOnly && children}
          </>
        ) : iconOnly ? (
          <span className={cn('shrink-0 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full', iconSizeClass)}>
            {children}
          </span>
        ) : (
          <>
            {leadingIcon != null && (
              <span className={cn('shrink-0 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full', iconSizeClass)}>
                {leadingIcon}
              </span>
            )}
            {children}
            {trailingIcon != null && (
              <span className={cn('shrink-0 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full', iconSizeClass)}>
                {trailingIcon}
              </span>
            )}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
