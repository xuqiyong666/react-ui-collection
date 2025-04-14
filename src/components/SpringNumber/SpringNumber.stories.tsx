import type { Meta, StoryObj } from '@storybook/react';

import SpringNumber from './SpringNumber';

const meta = {
  title: "SpringNumber",
  component: SpringNumber,
} satisfies Meta<typeof SpringNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: 10000,
    wrapStyle: {}
  }
};