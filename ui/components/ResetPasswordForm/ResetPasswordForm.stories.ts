import type { Meta, StoryObj } from '@storybook/react';
import { ResetPasswordForm } from '.';

const meta: Meta<typeof ResetPasswordForm> = {
  title: 'Components/ResetPasswordForm',
  component: ResetPasswordForm,
  parameters: {
    docs: {
      description: {
        component:
          'ResetPasswordForm allows a user to reset their password after receiving an email.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ResetPasswordForm>;

export const Default: Story = {};
