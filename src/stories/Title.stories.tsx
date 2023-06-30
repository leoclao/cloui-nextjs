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

// Theme: Default
export const Default: Story = {
  args: {
    title: 'Title',
    size: 2,
    theme: 0
  },
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

// Theme: Secondary
export const Secondary: Story = {
  args: {
    ...Default.args,
    theme: 1,
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

// Theme: Tertiary
export const Tertiary: Story = {
  args: {
    ...Default.args,
    theme: 2,
  },
  argTypes: {
    theme: {
      control: false,
    },
  },
}

// Size: H1
export const H1: Story = {
  args: {
    ...Default.args,
    size: 0,
  },
  argTypes: {
    size: {
      control: false,
    },
  },
}

// Size: H2
export const H2: Story = {
  args: {
    ...Default.args,
    size: 1,
  },
  argTypes: {
    ...H1.argTypes,
  }
}

// Size: H3
export const H3: Story = {
  args: {
    ...Default.args,
    size: 2,
  },
  argTypes: {
    ...H1.argTypes,
  }
}

// Size: H4
export const H4: Story = {
  args: {
    ...Default.args,
    size: 3,
  },
  argTypes: {
    ...H1.argTypes,
  }
}

// Size: H5
export const H5: Story = {
  args: {
    ...Default.args,
    size: 4,
  },
  argTypes: {
    ...H1.argTypes,
  }
}

// Size: H6
export const H6: Story = {
  args: {
    ...Default.args,
    size: 5,
  },
  argTypes: {
    ...H1.argTypes,
  }
}
