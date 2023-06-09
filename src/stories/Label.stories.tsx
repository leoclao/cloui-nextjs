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
  argTypes: {
    size: {
      control: false,
    },
    theme: {
      control: false,
    },
  }
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
      defaultValue: 0,
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
    ...Default.argTypes.theme,
  },
};

// Theme: Tertiary
export const Tertiary: Story = {
  args: {
    ...Default.args,
    theme: 2,
  },
  argTypes: {
    ...Default.argTypes.theme,
  },
}

// Size: Small
export const Small: Story = {
  args: {
    ...Default.args,
    size: 2,
  },
}
