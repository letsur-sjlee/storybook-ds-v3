import { useState } from 'react'
import { Button } from './components/Button'
import { Input } from './components/Input'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // 로그인 시뮬레이션
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      {/* Container - Figma: 400px width */}
      <div className="w-[400px]">

        {/* Card Content - Figma: px-40px(5xl), py-32px(4xl) */}
        <div className="bg-bg-primary rounded-sm shadow-sm py-4xl px-5xl flex flex-col items-center gap-3xl border border-border-primary">

          {/* Header */}
          <div className="flex flex-col w-full items-center text-center">
            <h1 className="text-display-sm font-semibold text-text-primary">
              로그인
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-xl">
            <Input
              id="email"
              label="이메일"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              size="sm"
            />

            <Input
              id="password"
              type="password"
              label="비밀번호"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="sm"
            />

            <Button
              type="submit"
              className="w-full justify-center"
              size="md"
              isLoading={isLoading}
            >
              로그인
            </Button>
          </form>

          {/* Footer Links */}
          <div className="flex flex-col items-center w-full gap-lg">
            <Button hierarchy="link-color" size="sm">
              비밀번호 재설정
            </Button>

            <div className="flex items-center gap-xs">
              <span className="text-text-sm text-text-tertiary">
                계정이 없으신가요?
              </span>
              <Button hierarchy="link-color" size="sm">
                회원가입
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App
