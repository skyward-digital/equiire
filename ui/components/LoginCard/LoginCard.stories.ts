import type { Meta, StoryObj } from '@storybook/react';
import { LoginCard } from '.';

const meta: Meta<typeof LoginCard> = {
  title: 'Components/LoginCard',
  component: LoginCard,
  parameters: {
    docs: {
      description: {
        component: 'LoginCard holds the LoginForm component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoginCard>;

export const Default: Story = {};
