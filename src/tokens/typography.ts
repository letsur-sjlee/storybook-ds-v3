/**
 * Typography Tokens
 * Figma: Semantic / Typhography.json
 *
 * 폰트 패밀리, 사이즈, 웨이트, 라인하이트 정의.
 */

// ─── Font Family ──────────────────────────────────────────────────────────
export const fontFamily = {
  display: ['Pretendard Variable', 'Pretendard', 'sans-serif'],
  body: ['Pretendard Variable', 'Pretendard', 'sans-serif'],
  sans: ['Pretendard Variable', 'Pretendard', 'sans-serif'],
} as const

// ─── Font Size + Line Height (pair) ──────────────────────────────────────
/**
 * [fontSize, { lineHeight }] 형태로 Tailwind에 직접 적용 가능.
 */
export const fontSize = {
  'text-xs': ['12px', { lineHeight: '18px' }],
  'text-xs-sm': ['13px', { lineHeight: '19px' }],
  'text-sm': ['14px', { lineHeight: '20px' }],
  'text-md': ['16px', { lineHeight: '24px' }],
  'text-lg': ['18px', { lineHeight: '28px' }],
  'text-xl': ['20px', { lineHeight: '30px' }],
  'display-xs': ['24px', { lineHeight: '32px' }],
  'display-sm': ['30px', { lineHeight: '38px' }],
  'display-md': ['36px', { lineHeight: '44px' }],
  'display-lg': ['48px', { lineHeight: '60px' }],
  'display-xl': ['60px', { lineHeight: '72px' }],
  'display-2xl': ['72px', { lineHeight: '90px' }],
} as const

// ─── Font Weight ──────────────────────────────────────────────────────────
export const fontWeight = {
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
} as const

// ─── Line Height (standalone) ─────────────────────────────────────────────
export const lineHeight = {
  'text-xs': '18px',
  'text-xs-sm': '19px',
  'text-sm': '20px',
  'text-md': '24px',
  'text-lg': '28px',
  'text-xl': '30px',
  'display-xs': '32px',
  'display-sm': '38px',
  'display-md': '44px',
  'display-lg': '60px',
  'display-xl': '72px',
  'display-2xl': '90px',
} as const

export type FontSizeKey = keyof typeof fontSize
export type FontWeightKey = keyof typeof fontWeight
