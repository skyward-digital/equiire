import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '.';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    docs: {
      description: {
        component:
          'Sidebar is a global component that shows up on the left side of the screen, allowing users to navigate through the app.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};
