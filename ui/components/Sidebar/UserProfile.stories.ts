import type { Meta, StoryObj } from '@storybook/react';
import { UserProfile } from './UserProfile';

const meta: Meta<typeof UserProfile> = {
  title: 'Components/Sidebar/UserProfile',
  component: UserProfile,
  parameters: {
    docs: {
      description: {
        component:
          'UserProfile allows a user to log in with email and password.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UserProfile>;

export const Default: Story = {};
