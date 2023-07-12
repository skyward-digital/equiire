import type { Meta, StoryObj } from '@storybook/react';
import { ForgotPasswordForm } from '.';

const meta: Meta<typeof ForgotPasswordForm> = {
  title: 'Components/ForgotPasswordForm',
  component: ForgotPasswordForm,
  parameters: {
    docs: {
      description: {
        component:
          'ForgotPasswordForm allows a user to enter their email address to get a link to reset their password.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ForgotPasswordForm>;

export const Default: Story = {};
