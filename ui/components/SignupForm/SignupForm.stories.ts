import type { Meta, StoryObj } from '@storybook/react';
import { SignupForm } from '.';

const meta: Meta<typeof SignupForm> = {
  title: 'Components/SignupForm',
  component: SignupForm,
  parameters: {
    docs: {
      description: {
        component:
          'SignupForm allows a user to log in with email and password.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SignupForm>;

export const Default: Story = {};
