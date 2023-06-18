import type { Meta, StoryObj } from '@storybook/react';
import { NotificationBanner } from '.';

const meta: Meta<typeof NotificationBanner> = {
  title: 'Components/NotificationBanner',
  component: NotificationBanner,
  // argTypes: {
  //   type: { control: 'text' },
  // },
  parameters: {
    docs: {
      description: {
        component: 'NotificationBanner component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NotificationBanner>;

export const Success: Story = {
  args: {
    type: 'success',
    children: (
      <div>
        Text for the notification banner <a href="#">link goes here</a>
      </div>
    ),
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    children: (
      <div>
        Text for the notification banner <a href="#">link goes here</a>
      </div>
    ),
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    children: (
      <div>
        Text for the notification banner <a href="#">link goes here</a>
      </div>
    ),
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    children: (
      <div>
        Text for the notification banner <a href="#">link goes here</a>
      </div>
    ),
  },
};
