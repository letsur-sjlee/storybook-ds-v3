import type { Meta, StoryObj } from '@storybook/react'
import { Mail, Search } from 'lucide-react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: '인풋 크기',
      table: { defaultValue: { summary: 'md' } },
    },
    label: {
      control: 'text',
      description: '라벨 텍스트',
    },
    required: {
      control: 'boolean',
      description: '필수 여부 (*)',
    },
    hint: {
      control: 'text',
      description: '힌트 텍스트',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더',
    },
    destructive: {
      control: 'boolean',
      description: '에러 상태 (border, hint 색상, alert 아이콘)',
      table: { defaultValue: { summary: 'false' } },
    },
    disabled: {
      control: 'boolean',
      description: '비활성화',
    },
  },
  args: {
    size: 'md',
    label: 'Email',
    required: true,
    hint: 'This is a hint text to help user.',
    placeholder: 'olivia@untitledui.com',
    disabled: false,
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Default: Story = {}

export const AllSizes: Story = {
  name: 'Size',
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Input
        size="md"
        label="Size md"
        required
        hint="This is a hint text to help user."
        placeholder="olivia@untitledui.com"
      />
      <Input
        size="sm"
        label="Size sm"
        required
        hint="This is a hint text to help user."
        placeholder="olivia@untitledui.com"
      />
    </div>
  ),
}

export const States: Story = {
  name: 'State',
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Input
        label="Placeholder"
        required
        hint="This is a hint text to help user."
        placeholder="olivia@untitledui.com"
      />
      <Input
        label="Filled"
        required
        hint="This is a hint text to help user."
        defaultValue="olivia@untitledui.com"
      />
      <Input
        label="Disabled"
        required
        hint="This is a hint text to help user."
        placeholder="olivia@untitledui.com"
        disabled
      />
    </div>
  ),
}

export const Destructive: Story = {
  name: 'Destructive',
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Input
        label="Placeholder"
        required
        hint="This is an error message."
        placeholder="olivia@untitledui.com"
        destructive
      />
      <Input
        label="Filled"
        required
        hint="This is an error message."
        defaultValue="olivia@untitledui.com"
        destructive
      />
    </div>
  ),
}

export const WithLeadingIcon: Story = {
  name: 'Leading Icon',
  render: () => (
    <div className="flex flex-col gap-6 w-80">
      <Input
        label="Email"
        required
        hint="This is a hint text to help user."
        placeholder="olivia@untitledui.com"
        leadingIcon={<Mail />}
      />
      <Input
        label="Search"
        placeholder="Search..."
        leadingIcon={<Search />}
      />
    </div>
  ),
}

export const NoLabel: Story = {
  name: 'No Label',
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input placeholder="olivia@untitledui.com" hint="This is a hint text to help user." />
      <Input placeholder="olivia@untitledui.com" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
