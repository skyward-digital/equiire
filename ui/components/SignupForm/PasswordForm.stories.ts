import type { Meta, StoryObj } from '@storybook/react';
import { PasswordForm } from '.';

const meta: Meta<typeof PasswordForm> = {
  title: 'Components/SignupForm/PasswordForm',
  component: PasswordForm,
  parameters: {
    docs: {
      description: {
        component:
          'PasswordForm is the form where users enter their password during the sign up flow.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PasswordForm>;

export const Default: Story = {};
