import { Meta, StoryObj } from "@storybook/react";
import { eTheme, eSize, eMessage, eGeometry } from "@/utils/types";
import { MeteredProps, Metered } from "@/elements/Metered";

const meta: Meta<typeof Metered> = {
  title: "elements/Metered",
  component: Metered,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Metered description",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Metered>;

// Theme: Default
export const Default: Story = {
  args: {
    icon: "fa fa-time",
    size: 2,
    theme: 0,
    status: 0,
    timer: 40,
    geometry: 0,
    // vertical: false,
  },
};

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
    size: {
      control: false,
    },
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
    theme: {
      control: false,
    },
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
