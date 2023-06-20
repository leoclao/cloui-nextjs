import { Meta, StoryObj } from '@storybook/react';
import { eTheme, eSize } from '@/utils/types';
import { LabelProps, Label } from '@/elements/Label';

const meta: Meta<typeof Label> = {
  title: 'elements/Label',
  component: Label,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Label description',
      },
    },
  },
  // argTypes: {
  //   size: {
  //     defaultValue: 'medium',
  //     options: ['small', 'medium', 'large'],
  //     control: { type: 'radio' },
  //     description: 'Size of the label:',
  //   },
  //   theme: {
  //     defaultValue: 'primary',
  //     options: ['primary', 'secondary', 'tertiary'],
  //     control: { type: 'radio' },
  //   },
  //   customStyle: {
  //     options: [''],
  //     // control: { type: 'text' },
  //   }
  // },
  // args: {
  //   text: 'Label',
  //   size: 'medium',
  //   theme: 'primary',
  // }
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    text: 'Label',
    size: 3,
  },
  // argTypes: {
  //   size: {
  //     control: false,
  //   },
  //   theme: {
  //     control: false,
  //   },
  // }
}

// Theme: Primary
export const Primary: Story = {
  args: {
    ...Default.args,
    theme: 0,
  },
  argTypes: {
    // ...Default.argTypes.theme,
    theme: {
      // defaultValue: 0,
      control: false,
    },
  },
};

// Theme: Secondary
export const Secondary: Story = {
  args: {
    ...Default.args,
    theme: 1,
  },
  argTypes: {
    // ...Default.argTypes.theme,
    theme: {
      control: false,
    },
  },
};

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
