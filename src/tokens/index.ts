/**
 * Design Tokens — Entry Point
 *
 * 모든 토큰을 단일 진입점으로 재export.
 * tailwind.config.ts 및 컴포넌트에서 이 파일을 import한다.
 *
 * @example
 * import { semanticColors, spacing, borderRadius } from '@/tokens'
 */

export { primitives } from './primitives'
export type { Primitives } from './primitives'

export { semanticColors } from './semantic-colors'
export type { SemanticColors } from './semantic-colors'

export { spacing } from './spacing'
export type { SpacingKey, SpacingValue } from './spacing'

export { fontFamily, fontSize, fontWeight, lineHeight } from './typography'
export type { FontSizeKey, FontWeightKey } from './typography'

export { borderRadius } from './radius'
export type { RadiusKey } from './radius'

export { maxWidth } from './width'
export type { MaxWidthKey } from './width'

export { boxShadow } from './effects'
export type { ShadowKey } from './effects'
