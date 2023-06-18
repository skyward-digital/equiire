import type { Meta, StoryObj } from '@storybook/react';
import { ResetPasswordForm } from '.';

const meta: Meta<typeof ResetPasswordForm> = {
  title: 'Components/ResetPasswordForm',
  component: ResetPasswordForm,
  parameters: {
    docs: {
      description: {
        component:
          'ResetPasswordForm allows a user to log in with email and password.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ResetPasswordForm>;

export const Default: Story = {};
