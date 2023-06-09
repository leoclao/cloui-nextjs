import { Meta, StoryObj } from '@storybook/react';
import { eTheme } from '@/utils/types';
import { titleSize, TitleProps, Title } from '@/elements/Title';

const meta: Meta<typeof Title> = {
  title: 'elements/Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Title description',
      },
    }
  }
}

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    title: 'Title',
    size: 0,
    theme: 0
  },
  argTypes: {
    size: {
      control: false,
    },
    theme: {
      control: false,
    }
  }
}

// Theme: Primary
export const Primary: Story = {
  args: {
    ...Default.args,
    theme: 0,
  },
  argTypes: {
    size: {
      control: false,
    },
    theme: {
      control: false,
    }
  }
}
