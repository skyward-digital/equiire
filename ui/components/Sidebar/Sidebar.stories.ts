import type {
  Meta,
  // StoryObj
} from '@storybook/react';
import { Sidebar } from '.';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    docs: {
      description: {
        component: 'Sidebar allows a user to log in with email and password.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

// type Story = StoryObj<typeof Sidebar>;

// export const Default: Story = {};
