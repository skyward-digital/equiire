import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from '.';

const meta: Meta<typeof Slider> = {
  title: 'Components/SliderGroup/Slider',
  component: Slider,
  parameters: {
    docs: {
      description: {
        component: 'Slider component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    progress: 66,
  },
};

export const Empty: Story = {};

export const Complete: Story = {
  args: {
    progress: 100,
  },
};
