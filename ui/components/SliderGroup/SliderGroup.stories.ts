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

export const Default: Story = {};
