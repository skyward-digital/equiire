import type { Meta, StoryObj } from '@storybook/react';
import { SliderGroup } from '.';

const meta: Meta<typeof SliderGroup> = {
  title: 'Components/SliderGroup',
  component: SliderGroup,
  parameters: {
    docs: {
      description: {
        component: 'SliderGroup component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SliderGroup>;

export const Default: Story = {
  args: {
    label: 'Slider Group Label',
    minLabel: '1',
    maxLabel: '5',
    options: [
      { label: '1', value: '1', default: true },
      { label: '2', value: '2' },
      { label: '3', value: '3' },
      { label: '4', value: '4' },
      { label: '5', value: '5' },
    ],
  },
};
