import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '.';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          'Badge is a component used for displaying a small amount of information, such as a missing field or a notification.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Info: Story = {
  args: {
    type: 'info',
    Icon: ExclamationTriangleIcon,
    children: 'Missing information',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    Icon: ExclamationTriangleIcon,
    children: 'Missing information',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    Icon: ExclamationTriangleIcon,
    children: 'Missing information',
  },
};
