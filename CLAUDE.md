# CLAUDE.md — storybook-ds-v3

## 프로젝트 개요
Figma 디자인 시스템 기반의 React + Tailwind CSS 컴포넌트 라이브러리.
**목표:** Button, Input 컴포넌트를 시작으로 최소 범위의 화면까지 구현.

---

## 기술 스택
| 역할 | 선택 |
|------|------|
| 번들러 | Vite |
| UI | React 18 + TypeScript |
| 스타일링 | Tailwind CSS v3 |
| 문서화 | Storybook 8 |
| 변형 관리 | class-variance-authority (CVA) |
| 클래스 병합 | clsx + tailwind-merge |
| 패키지 매니저 | npm |

---

## 디렉토리 구조
```
src/
├── tokens/               # 디자인 토큰 (Figma 변수 → TS)
│   ├── primitives.ts     # 원시 색상 팔레트
│   ├── semantic-colors.ts # 시멘틱 색상 토큰
│   ├── spacing.ts        # 간격 토큰
│   ├── typography.ts     # 타이포그래피 토큰
│   ├── radius.ts         # 보더 반지름 토큰
│   ├── width.ts          # 너비 토큰
│   └── index.ts          # 전체 재export
├── lib/
│   └── utils.ts          # cn() 유틸리티 (clsx + twMerge)
└── components/
    ├── Button/
    │   ├── Button.tsx
    │   ├── Button.stories.tsx
    │   └── index.ts
    └── Input/
        ├── Input.tsx
        ├── Input.stories.tsx
        └── index.ts
```

---

## 코딩 컨벤션

### 컴포넌트 작성 규칙
- 컴포넌트 변형은 반드시 **CVA(class-variance-authority)** 로 관리
- 클래스 병합은 항상 `cn()` 유틸리티 사용 (`src/lib/utils.ts`)
- Props 타입은 컴포넌트 파일 내 `interface`로 선언
- `React.forwardRef` 사용으로 ref 전달 지원
- HTML 네이티브 속성 상속: `ButtonHTMLAttributes`, `InputHTMLAttributes` 확장

### 스타일링 규칙
- **Tailwind 클래스만** 사용 (인라인 스타일 금지)
- 디자인 토큰 값은 `tailwind.config.ts`의 `theme.extend`를 통해서만 참조
- 임의값(arbitrary values) 사용 금지 — 토큰에 없는 값은 먼저 토큰에 추가

### 네이밍 규칙
- 컴포넌트 파일: `PascalCase.tsx`
- 스토리 파일: `PascalCase.stories.tsx`
- 토큰 키: `kebab-case` (Figma 변수명 그대로 유지)
- CSS 변수: `--color-{token-name}` 형식

### TypeScript
- `any` 타입 사용 금지
- 모든 export는 named export 사용 (default export 지양)
- Props에 JSDoc 주석 추가 (Storybook Controls 자동 연동)

---

## 디자인 토큰 원칙
- **Primitive tokens** (`src/tokens/primitives.ts`): 원시 색상 팔레트 (절대값)
- **Semantic tokens** (`src/tokens/semantic-colors.ts`): 의미 기반 참조 (Primitive → Semantic)
- Figma 원본 JSON: `Design token/` 디렉토리 (수정 금지 — 원본 보존)
- 토큰 변경 시 Figma 파일 업데이트 후 JSON 재export → `src/tokens/` 반영

---

## Storybook 규칙
- 모든 컴포넌트는 스토리 필수 작성
- `argTypes`로 모든 Props Controls 연동
- 상태별 스토리 작성: `Default`, `Hover`, `Disabled`, `Loading` 등
- `parameters.design`으로 Figma 프레임 연결 (addon-designs)

---

## 브랜드 색상 (Primary)
- Brand Green: `#00C781` (Brand/500)
- Brand Dark: `#008F79` (Brand/700)
- Error Red: `#FF4F4F` (Error/500)
- Warning Orange: `#F79009` (Warning/500)

---

## 작업 전 체크리스트
- [ ] `CLAUDE.md` 숙지
- [ ] `Design token/` JSON 확인
- [ ] `src/tokens/` 토큰 매핑 확인
- [ ] `tailwind.config.ts` 토큰 반영 확인
