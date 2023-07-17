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
    message: 'You still need to complete your account setup',
    status: 'success',
    link: '#',
    linkLabel: 'Complete setup',
  },
};

export const Warning: Story = {
  args: {
    message: 'You still need to complete your account setup',
    status: 'warning',
    link: '#',
    linkLabel: 'Complete setup',
  },
};

export const Error: Story = {
  args: {
    message: 'You still need to complete your account setup',
    status: 'error',
    link: '#',
    linkLabel: 'Complete setup',
  },
};

export const Info: Story = {
  args: {
    message: 'You still need to complete your account setup',
    status: 'info',
    link: '#',
    linkLabel: 'Complete setup',
  },
};
