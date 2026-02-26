/**
 * Spacing Tokens
 * Figma: Semantic / Spacing.json
 *
 * 간격 시스템. px 단위 기준.
 * tailwind.config.ts의 spacing에 매핑됨.
 */

export const spacing = {
  none: '0px',
  xxs: '2px',
  xs: '4px',
  sm: '6px',
  md: '8px',
  'md-lg': '10px',
  lg: '12px',
  'lg-xl': '14px',
  xl: '16px',
  'xl-2xl': '18px',
  '2xl': '20px',
  '3xl': '24px',
  '4xl': '32px',
  '5xl': '40px',
  '6xl': '48px',
  '7xl': '64px',
  '8xl': '80px',
  '9xl': '96px',
  '10xl': '128px',
  '11xl': '160px',
} as const

export type SpacingKey = keyof typeof spacing
export type SpacingValue = (typeof spacing)[SpacingKey]
