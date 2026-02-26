import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { AlertCircle } from 'lucide-react'
import { cn } from '../../lib/utils'

// ─── CVA Variants ─────────────────────────────────────────────────────────────

const inputWrapperVariants = cva(
  [
    'flex w-full items-center',
    'rounded-sm border bg-bg-primary',
    'shadow-xs',
    'transition-colors duration-150',
  ],
  {
    variants: {
      size: {
        sm: 'gap-md px-lg py-md',
        md: 'gap-md px-lg-xl py-md-lg',
      },
      destructive: {
        true: 'border-border-error-subtle',
        false: 'border-border-primary',
      },
      isFocused: {
        true: '',
        false: '',
      },
      disabled: {
        true: 'bg-bg-disabled-subtle border-border-disabled cursor-not-allowed',
        false: '',
      },
    },
    compoundVariants: [
      // focused + normal
      {
        isFocused: true,
        destructive: false,
        class: 'border-border-brand ring-1 ring-border-brand',
      },
      // focused + destructive
      {
        isFocused: true,
        destructive: true,
        class: 'border-border-error ring-1 ring-border-error',
      },
    ],
    defaultVariants: {
      size: 'md',
      destructive: false,
      isFocused: false,
      disabled: false,
    },
  }
)

const inputVariants = cva(
  [
    'flex-1 min-w-0 bg-transparent outline-none',
    'font-body font-normal',
    'text-text-primary placeholder:text-text-placeholder',
    'disabled:cursor-not-allowed disabled:text-text-disabled',
    'py-none px-none',
  ],
  {
    variants: {
      size: {
        sm: 'text-text-sm',
        md: 'text-text-md',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

// ─── Types ────────────────────────────────────────────────────────────────────

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    Pick<VariantProps<typeof inputWrapperVariants>, 'size'> {
  /** 인풋 크기 */
  size?: 'sm' | 'md'
  /** 라벨 텍스트 */
  label?: string
  /** 필수 여부 (*) */
  required?: boolean
  /** 힌트 텍스트 */
  hint?: string
  /** 에러 상태 (border, hint 색상, alert 아이콘 표시) */
  destructive?: boolean
  /** 앞쪽 아이콘 */
  leadingIcon?: React.ReactNode
}

// ─── Component ────────────────────────────────────────────────────────────────

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size = 'md',
      label,
      required,
      hint,
      destructive = false,
      leadingIcon,
      disabled,
      onFocus,
      onBlur,
      id,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const generatedId = React.useId()
    const inputId = id ?? generatedId

    return (
      <div className={cn('flex flex-col gap-sm w-full', className)}>
        {/* Label */}
        {label && (
          <div className="flex items-center gap-xxs">
            <label
              htmlFor={inputId}
              className="text-text-sm font-body font-medium leading-[20px] text-text-primary cursor-pointer"
            >
              {label}
            </label>
            {required && (
              <span className="text-text-sm font-body font-medium leading-[20px] text-fg-required">
                *
              </span>
            )}
          </div>
        )}

        {/* Input wrapper */}
        <div
          className={inputWrapperVariants({
            size,
            destructive,
            isFocused: isFocused && !disabled,
            disabled: !!disabled,
          })}
        >
          {leadingIcon != null && (
            <span className="shrink-0 flex items-center justify-center text-fg-quaternary w-5 h-5 [&>svg]:w-full [&>svg]:h-full">
              {leadingIcon}
            </span>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={inputVariants({ size })}
            onFocus={(e) => {
              setIsFocused(true)
              onFocus?.(e)
            }}
            onBlur={(e) => {
              setIsFocused(false)
              onBlur?.(e)
            }}
            {...props}
          />
          {destructive && !disabled && (
            <span className="shrink-0 flex items-center justify-center text-fg-error-secondary w-5 h-5 [&>svg]:w-full [&>svg]:h-full">
              <AlertCircle />
            </span>
          )}
        </div>

        {/* Hint */}
        {hint && (
          <p className={cn(
            'text-text-sm font-body font-normal leading-[20px]',
            destructive ? 'text-text-error-primary' : 'text-text-tertiary'
          )}>
            {hint}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
