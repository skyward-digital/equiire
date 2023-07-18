import type { Meta, StoryObj } from '@storybook/react';
import { SignupCard } from '.';

const meta: Meta<typeof SignupCard> = {
  title: 'Components/SignupCard',
  component: SignupCard,
  parameters: {
    docs: {
      description: {
        component: 'SignupCard is the wrapper component for SignupForm',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SignupCard>;

export const Default: Story = {};

export const WithBackButton: Story = {
  args: {
    back: () => console.log('back'),
    step: 2,
  },
};
