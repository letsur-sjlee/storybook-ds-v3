/**
 * Width Tokens
 * Figma: Semantic / Width.json
 *
 * 최대 너비 및 단락 너비 기준값.
 * tailwind.config.ts의 maxWidth에 매핑됨.
 */

export const maxWidth = {
  xxs: '320px',
  xs: '384px',
  sm: '480px',
  md: '560px',
  lg: '640px',
  xl: '768px',
  '2xl': '1024px',
  '3xl': '1280px',
  '4xl': '1440px',
  '5xl': '1600px',
  '6xl': '1920px',
  'paragraph': '720px',
} as const

export type MaxWidthKey = keyof typeof maxWidth
