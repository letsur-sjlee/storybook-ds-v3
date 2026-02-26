import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

/**
 * tailwind-merge 충돌 해결 전략
 *
 * 문제: 커스텀 토큰이 text-* prefix를 공유하면 tailwind-merge가
 *       font-size / color를 같은 그룹으로 묶어 서로를 제거함.
 *       예) text-text-sm(font-size) + text-text-primary(color) → color만 남음
 *
 * 해결: validator 함수로 prefix 패턴을 그룹에 등록
 *   - font-size 그룹: text-{size-token} — 커스텀 폰트 크기 토큰 명시
 *   - text-color 그룹: text-text-* / text-fg-* 패턴 → 정규식으로 자동 감지
 *
 * 장점: 새 토큰이 추가돼도 이 파일을 수정할 필요 없음.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      // font-size: 커스텀 폰트 크기 토큰 명시 등록
      'font-size': [
        {
          text: [
            'text-xs',
            'text-xs-sm',
            'text-sm',
            'text-md',
            'text-lg',
            'text-xl',
            'display-xs',
            'display-sm',
            'display-md',
            'display-lg',
            'display-xl',
            'display-2xl',
          ],
        },
      ],
      // text-color: text-text-* / text-fg-* 패턴을 정규식으로 자동 감지
      // → 토큰이 추가돼도 이 파일 수정 불필요
      'text-color': [
        (value: string) => /^(text-text-|text-fg-)/.test(value),
      ],
    },
  },
})

/**
 * Tailwind 클래스를 안전하게 병합하는 유틸리티.
 *
 * @example
 * cn('px-4 py-2', condition && 'bg-brand-500', className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
