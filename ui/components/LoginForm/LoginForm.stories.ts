import type { Meta, StoryObj } from '@storybook/react';
import { LoginForm } from '.';

const meta: Meta<typeof LoginForm> = {
  title: 'Components/LoginForm',
  component: LoginForm,
  parameters: {
    docs: {
      description: {
        component: 'LoginForm allows a user to log in with email and password.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {};
