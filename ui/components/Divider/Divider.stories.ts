import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '.';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    docs: {
      description: {
        component: 'Divider is a visual component that separates page content',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {};
