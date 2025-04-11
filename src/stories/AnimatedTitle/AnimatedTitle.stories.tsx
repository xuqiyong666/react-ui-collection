import type { Meta, StoryObj } from '@storybook/react';

import AnimatedTitle from './AnimatedTitle';

const meta = {
  title: "UI/AnimatedTitle",
  component: AnimatedTitle,
} satisfies Meta<typeof AnimatedTitle>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Black: Story = {
  args: {
    title: "低代码应用开发平台",
    containerStyle: {
      display: "flex",
      justifyContent: "center",
      padding: 10,
      backgroundColor: "black",
      width: 600
    }
  }
};
