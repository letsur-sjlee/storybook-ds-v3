/**
 * Semantic Color Tokens
 * Figma: Semantic / Colors.json
 *
 * 의미 기반 색상 토큰. Primitive 팔레트를 의미 있는 이름으로 매핑.
 * 컴포넌트에서는 이 토큰을 참조한다.
 */

import { primitives } from './primitives'

const { base, gray, brand, error, warning, success, blue } = primitives

export const semanticColors = {
  // ─── Text ──────────────────────────────────────────────────────────────
  text: {
    /** 주요 텍스트 (Gray/900) */
    primary: gray[900],
    /** 브랜드 배경 위 주요 텍스트 */
    'primary-on-brand': base.white,
    /** 보조 텍스트 (Gray/700) */
    secondary: gray[700],
    'secondary-hover': gray[800],
    'secondary-on-brand': brand[200],
    /** 3차 텍스트 (Gray/600) */
    tertiary: gray[600],
    'tertiary-hover': gray[700],
    'tertiary-on-brand': brand[200],
    /** 4차 텍스트 (Gray/500) */
    quaternary: gray[500],
    'quaternary-on-brand': brand[300],
    /** 흰색 텍스트 */
    white: base.white,
    /** 비활성화 텍스트 (Gray/500) */
    disabled: gray[500],
    /** 플레이스홀더 (Gray/400) */
    placeholder: gray[400],
    'placeholder-subtle': gray[300],
    /** 브랜드 텍스트 */
    'brand-primary': brand[900],
    'brand-secondary': brand[700],
    'brand-secondary-hover': brand[800],
    'brand-tertiary': brand[600],
    /** 상태 텍스트 */
    'error-primary': error[600],
    'error-primary-hover': error[700],
    'warning-primary': warning[600],
    'success-primary': success[600],
    /** 링크 */
    link: blue[500],
    'link-hover': blue[600],
    /** Focus Ring */
    'focus-ring': brand[500],
    'focus-ring-alt': brand[600],
    'focus-ring-gray': gray[600],
    'focus-ring-error': error[500],
  },

  // ─── Border ────────────────────────────────────────────────────────────
  border: {
    /** 기본 테두리 (Gray/300) */
    primary: gray[300],
    /** 보조 테두리 (Gray/200) */
    secondary: gray[200],
    'secondary-alt': 'rgba(0, 0, 0, 0.08)',
    /** 3차 테두리 (Gray/100) */
    tertiary: gray[100],
    /** 비활성화 */
    disabled: gray[300],
    'disabled-subtle': gray[200],
    /** 브랜드 */
    brand: brand[500],
    'brand-alt': brand[600],
    /** 상태 */
    error: error[500],
    'error-subtle': error[300],
  },

  // ─── Foreground (아이콘, SVG 등) ───────────────────────────────────────
  foreground: {
    /** 주요 (Gray/900) */
    primary: gray[900],
    /** 보조 (Gray/700) */
    secondary: gray[700],
    'secondary-hover': gray[800],
    /** 3차 (Gray/600) */
    tertiary: gray[600],
    'tertiary-hover': gray[700],
    /** 4차 (Gray/400) */
    quaternary: gray[400],
    'quaternary-hover': gray[500],
    /** 흰색 */
    white: base.white,
    /** 비활성화 */
    disabled: gray[400],
    'disabled-subtle': gray[300],
    /** 브랜드 */
    'brand-primary': brand[500],
    'brand-secondary': brand[400],
    'brand-secondary-hover': brand[600],
    /** 상태 */
    'error-primary': error[600],
    'error-secondary': error[500],
    'warning-primary': warning[600],
    'warning-secondary': warning[500],
    'success-primary': success[600],
    'success-secondary': success[500],
    /** 링크 */
    'text-link': blue[500],
    'text-link-hover': blue[600],
    /** Required 표시 */
    required: error[500],
  },

  // ─── Background ────────────────────────────────────────────────────────
  background: {
    /** 기본 배경 */
    primary: base.white,
    'primary-alt': base.white,
    'primary-hover': gray[50],
    'primary-solid': gray[950],
    'primary-solid-hover': gray[900],
    /** 보조 배경 */
    secondary: gray[50],
    'secondary-alt': gray[50],
    'secondary-hover': gray[100],
    'secondary-subtle': gray[25],
    'secondary-solid': gray[600],
    /** 3차/4차 배경 */
    tertiary: gray[100],
    quaternary: gray[200],
    /** 비활성화 */
    disabled: gray[100],
    'disabled-subtle': gray[50],
    /** 브랜드 */
    'brand-primary': brand[600],
    'brand-primary-alt': brand[700],
    'brand-secondary': brand[700],
    'brand-solid': brand[500],
    'brand-solid-hover': brand[600],
    'brand-section': brand[800],
    /** 상태 */
    'error-primary': error[50],
    'error-secondary': error[100],
    'error-solid': error[600],
    'warning-primary': warning[50],
    'warning-secondary': warning[100],
    'warning-solid': warning[600],
    'success-primary': success[50],
    'success-secondary': success[100],
    'success-solid': success[600],
    /** 오버레이 */
    overlay: 'rgba(0, 0, 0, 0.4)',
  },
} as const

export type SemanticColors = typeof semanticColors
