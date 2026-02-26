import type { Meta, StoryObj } from '@storybook/react'
import { Plus, ArrowRight } from 'lucide-react'
import { Button } from './Button'

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    hierarchy: {
      control: 'select',
      options: ['primary', 'gray', 'secondary', 'tertiary', 'link-color', 'link-gray'],
      description: '버튼 시각적 계층',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: '버튼 크기',
      table: { defaultValue: { summary: 'md' } },
    },
    iconOnly: {
      control: 'boolean',
      description: '아이콘만 표시 (텍스트 없음)',
      table: { defaultValue: { summary: 'false' } },
    },
    isLoading: {
      control: 'boolean',
      description: '로딩 상태',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화',
    },
    children: {
      control: 'text',
      description: '버튼 텍스트',
    },
  },
  args: {
    children: 'Button CTA',
    hierarchy: 'primary',
    size: 'md',
    iconOnly: false,
    isLoading: false,
    disabled: false,
  },
}

export default meta
type Story = StoryObj<typeof meta>

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Default: Story = {}

export const AllSizes: Story = {
  name: 'Size',
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">sm</Button>
      <Button size="md">md</Button>
      <Button size="lg">lg</Button>
      <Button size="xl">xl</Button>
    </div>
  ),
}

export const AllHierarchies: Story = {
  name: 'Hierarchy',
  render: () => (
    <div className="flex items-center gap-4 flex-wrap">
      <Button hierarchy="primary">Primary</Button>
      <Button hierarchy="gray">Gray</Button>
      <Button hierarchy="secondary">Secondary</Button>
      <Button hierarchy="tertiary">Tertiary</Button>
      <Button hierarchy="link-color">Link color</Button>
      <Button hierarchy="link-gray">Link gray</Button>
    </div>
  ),
}

export const States: Story = {
  name: 'State',
  render: () => (
    <div className="flex flex-col gap-4">
      {(['primary', 'gray', 'secondary', 'tertiary'] as const).map((hierarchy) => (
        <div key={hierarchy} className="flex items-center gap-4">
          <span className="w-20 text-xs text-gray-500 capitalize">{hierarchy}</span>
          <Button hierarchy={hierarchy}>Default</Button>
          <Button hierarchy={hierarchy} isLoading>
            Submitting...
          </Button>
          <Button hierarchy={hierarchy} disabled>
            Disabled
          </Button>
        </div>
      ))}
    </div>
  ),
}

export const WithIcons: Story = {
  name: 'Icon',
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="w-24 text-xs text-gray-500">Icon only</span>
        {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
          <Button key={size} size={size} iconOnly aria-label={`Plus (${size})`}>
            <Plus />
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-xs text-gray-500">Leading</span>
        <Button leadingIcon={<Plus />}>Button CTA</Button>
        <Button hierarchy="secondary" leadingIcon={<Plus />}>
          Button CTA
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-xs text-gray-500">Trailing</span>
        <Button trailingIcon={<ArrowRight />}>Button CTA</Button>
        <Button hierarchy="secondary" trailingIcon={<ArrowRight />}>
          Button CTA
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-xs text-gray-500">Both</span>
        <Button leadingIcon={<Plus />} trailingIcon={<ArrowRight />}>
          Button CTA
        </Button>
        <Button
          hierarchy="secondary"
          leadingIcon={<Plus />}
          trailingIcon={<ArrowRight />}
        >
          Button CTA
        </Button>
      </div>
    </div>
  ),
}

const focusClassMap: Record<string, string> = {
  primary: 'shadow-focus-ring-alt',
  gray: 'shadow-focus-ring-gray',
  secondary: 'shadow-focus-ring',
  tertiary: 'shadow-focus-ring',
  'link-color': 'shadow-focus-ring',
  'link-gray': 'shadow-focus-ring-gray',
}

export const Focused: Story = {
  name: 'Focused',
  render: () => (
    <div className="flex flex-col gap-4 p-8">
      {(['primary', 'gray', 'secondary', 'tertiary', 'link-color', 'link-gray'] as const).map((hierarchy) => (
        <div key={hierarchy} className="flex items-center gap-4">
          <span className="w-24 text-xs text-gray-500 capitalize">{hierarchy}</span>
          <Button hierarchy={hierarchy} className={focusClassMap[hierarchy]}>
            Button CTA
          </Button>
        </div>
      ))}
    </div>
  ),
}

export const Loading: Story = {
  args: {
    isLoading: true,
    children: 'Submitting...',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
