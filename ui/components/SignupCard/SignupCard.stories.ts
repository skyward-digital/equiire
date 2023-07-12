import type { Meta, StoryObj } from '@storybook/react';
import { SignupCard } from '.';

const meta: Meta<typeof SignupCard> = {
  title: 'Components/SignupCard',
  component: SignupCard,
  parameters: {
    docs: {
      description: {
        component: 'SignupCard holds the SignupForm component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SignupCard>;

export const Default: Story = {};
