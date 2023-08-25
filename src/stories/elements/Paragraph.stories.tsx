import { Meta, StoryObj } from "@storybook/react";
import { eTheme, eSize } from "@/utils/types";
import { ParagraphProps, Paragraph } from "@/elements/Paragraph";

const meta: Meta<typeof Paragraph> = {
  title: "elements/Paragraph",
  component: Paragraph,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Paragraph",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

// Theme: Default
export const Default: Story = {
  args: {
    content: "Paragraph",
    size: 3,
    theme: 0,
  },
};

// Theme: Primary
export const Primary: Story = {
  args: {
    ...Default.args,
  },
  argTypes: {
    theme: {
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
    ...Primary.argTypes,
  },
};

// Theme: Tertiary
export const Tertiary: Story = {
  args: {
    ...Default.args,
    theme: 2,
  },
  argTypes: {
    ...Primary.argTypes,
  },
};

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
};

// Size: Smaller
export const Smaller: Story = {
  args: {
    ...Default.args,
    size: 1,
  },
  argTypes: {
    ...Tiny.argTypes,
  },
};

// Size: Small
export const Small: Story = {
  args: {
    ...Default.args,
    size: 2,
  },
  argTypes: {
    ...Tiny.argTypes,
  },
};

// Size: Medium
export const Medium: Story = {
  args: {
    ...Default.args,
    size: 3,
  },
  argTypes: {
    ...Tiny.argTypes,
  },
};

// Size: Large
export const Large: Story = {
  args: {
    ...Default.args,
    size: 4,
  },
  argTypes: {
    ...Tiny.argTypes,
  },
};

// Size: XLarge
export const XLarge: Story = {
  args: {
    ...Default.args,
    size: 5,
  },
  argTypes: {
    ...Tiny.argTypes,
  },
};

// Size: XXLarge
export const XXLarge: Story = {
  args: {
    ...Default.args,
    size: 6,
  },
  argTypes: {
    ...Tiny.argTypes,
  },
};

// Size: XXXLarge
export const XXXLarge: Story = {
  args: {
    ...Default.args,
    size: 7,
  },
  argTypes: {
    ...Tiny.argTypes,
  },
};

// Size: Big
export const Big: Story = {
  args: {
    ...Default.args,
    size: 8,
  },
  argTypes: {
    ...Tiny.argTypes,
  },
};

// Size: Huge
export const Huge: Story = {
  args: {
    ...Default.args,
    size: 9,
  },
  argTypes: {
    ...Tiny.argTypes,
  },
};
