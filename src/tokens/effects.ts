import { primitives } from './primitives';

/**
 * Effect Tokens (Shadows & Focus Rings)
 * Figma: Semantic / Effects.json
 *
 * Figma 디자인 시스템의 정밀한 중첩 레이어 사양을 반영합니다.
 */

export const boxShadow = {
  // ─── Shadows ───────────────────────────────────────────────────────────
  xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  sm: '0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
  md: '0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)',
  lg: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
  xl: '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
  '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
  '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',

  // ─── Focus Rings ───────────────────────────────────────────────────────
  // Figma [Focus rings] (node-id=5424-398991) 4가지 사양 반영
  /** Primary focus ring (Brand/500) */
  'focus-ring': `0px 0px 0px 2px ${primitives.brand[500]}`,
  /** Alternate focus ring (Brand/600) */
  'focus-ring-alt': `0px 0px 0px 2px ${primitives.brand[600]}`,
  /** Gray focus ring (Gray/600) */
  'focus-ring-gray': `0px 0px 0px 2px ${primitives.gray[600]}`,
  /** Error focus ring (Error/500) */
  'focus-ring-error': `0px 0px 0px 2px ${primitives.error[500]}`,
} as const;

export type ShadowKey = keyof typeof boxShadow;
