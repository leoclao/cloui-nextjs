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
  // argTypes: {
  //   size: {
  //     control: false,
  //   },
  //   theme: {
  //     control: false,
  //   }
  // }
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

// Theme: Tertiary
export const Tertiary: Story = {
  args: {
    ...Default.args,
    theme: 2,
  },
  argTypes: {
    // ...Default.argTypes.theme,
    theme: {
      control: false,
    },
  },
}

// Size: Tiny
export const Tiny: Story = {
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

// Size: Smaller
export const Smaller: Story = {
  args: {
    ...Default.args,
    size: 1,
  },
  argTypes: {
    ...Tiny.argTypes,
  }
}

// Size: Small
export const Small: Story = {
  args: {
    ...Default.args,
    size: 2,
  },
  argTypes: {
    ...Tiny.argTypes,
  }
}

// Size: Medium
export const Medium: Story = {
  args: {
    ...Default.args,
    size: 3,
  },
  argTypes: {
    ...Tiny.argTypes,
  }
}

// Size: Large
export const Large: Story = {
  args: {
    ...Default.args,
    size: 4,
  },
  argTypes: {
    ...Tiny.argTypes,
  }
}

// Size: XLarge
export const XLarge: Story = {
  args: {
    ...Default.args,
    size: 5,
  },
  argTypes: {
    ...Tiny.argTypes,
  }
}

// Size: XXLarge
export const XXLarge: Story = {
  args: {
    ...Default.args,
    size: 6,
  },
  argTypes: {
    ...Tiny.argTypes,
  }
}

// Size: XXXLarge
export const XXXLarge: Story = {
  args: {
    ...Default.args,
    size: 7,
  },
  argTypes: {
    ...Tiny.argTypes,
  }
}

// Size: Big
export const Big: Story = {
  args: {
    ...Default.args,
    size: 8,
  },
  argTypes: {
    ...Tiny.argTypes,
  }
}

// Size: Huge
export const Huge: Story = {
  args: {
    ...Default.args,
    size: 9,
  },
  argTypes: {
    ...Tiny.argTypes,
  }
}
