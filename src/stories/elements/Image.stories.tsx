import { Meta, StoryObj } from "@storybook/react";
import { eSize, aspectRatio } from "@/utils/types";
import { ImgProps, Img } from "@/elements/Image";
// import { ImgDemo } from 'https://picsum.photos/seed/picsum/200/300';

const meta: Meta<typeof Img> = {
  title: "elements/Img",
  component: Img,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Image description",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Img>;

// Theme: Default
export const Default: Story = {
  args: {
    src: "https://picsum.photos/seed/picsum/200/300",
    width: 200,
    height: 300,
    desc: "Detailed description for this image",
    // loader,
    fill: false,
    // sizes: 3,
    // quality,
    // priority,
    // placeholder,
    // onLoadingCompete,
    // onLoad,
    // onError,
    loading: "lazy",
    // blurDataURL,
    // srcset,
    ratio: 0,
    figcaption: false,
  },
};

// Theme: Primary
export const Primary: Story = {
  args: {
    ...Default.args,
  },
  // argTypes: {
  //   size: {
  //     control: false,
  //   }
  // }
};

// Size: H1
// export const H1: Story = {
//   args: {
//     ...Default.args
//   },
//   argTypes: {
//     size: {
//       control: false,
//     },
//   },
// }
