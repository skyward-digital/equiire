import type { Meta, StoryObj } from '@storybook/react';
import { UserProfile } from './UserProfile';

const meta: Meta<typeof UserProfile> = {
  title: 'Components/Header/UserProfile',
  component: UserProfile,
  parameters: {
    docs: {
      description: {
        component: 'User profile component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UserProfile>;

export const Default: Story = {
  args: {
    user: {
      _id: '1',
      name: 'John Doe',
      email: 'johndoe@acme.com',
      avatar: 'https://i.pravatar.cc/300',
      company: 'Acme Inc',
    },
  },
};
