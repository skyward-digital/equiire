import type { Meta, StoryObj } from '@storybook/react';
import { ForgotPasswordCard } from '.';

const meta: Meta<typeof ForgotPasswordCard> = {
  title: 'Components/ForgotPasswordCard',
  component: ForgotPasswordCard,
  parameters: {
    docs: {
      description: {
        component: 'ForgetPasswordCard holds the ForgetPasswordForm component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ForgotPasswordCard>;

export const ForgottenPassword: Story = {};

export const ResetPassword: Story = {
  args: {
    token: true,
  },
};
