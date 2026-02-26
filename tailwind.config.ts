import type { Config } from 'tailwindcss'
import { primitives, semanticColors, spacing, fontSize, fontFamily, fontWeight, borderRadius, maxWidth, boxShadow } from './src/tokens'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './.storybook/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // ─── Colors ──────────────────────────────────────────────────────────
      colors: {
        // Primitive 팔레트 (컴포넌트에서는 semantic 사용 권장)
        brand: primitives.brand,
        error: primitives.error,
        warning: primitives.warning,
        success: primitives.success,
        blue: primitives.blue,
        purple: primitives.purple,
        gray: primitives.gray,

        // Semantic 색상
        text: semanticColors.text,
        border: semanticColors.border,
        fg: semanticColors.foreground,
        bg: semanticColors.background,
      },

      // ─── Spacing ─────────────────────────────────────────────────────────
      spacing,

      // ─── Typography ──────────────────────────────────────────────────────
      fontFamily,
      // @ts-expect-error: Tailwind accepts [size, { lineHeight }] tuple
      fontSize,
      fontWeight,

      // ─── Border Radius ───────────────────────────────────────────────────
      borderRadius,

      // ─── Max Width ───────────────────────────────────────────────────────
      maxWidth,

      // ─── Box Shadow (Effects) ─────────────────────────────────────────────
      boxShadow,
    },
  },
  plugins: [],
}

export default config
