import type { Meta, StoryObj } from '@storybook/react';
import { SidebarLink } from '.';
import { HomeIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof SidebarLink> = {
  title: 'Components/Sidebar/SidebarLink',
  component: SidebarLink,
  parameters: {
    docs: {
      description: {
        component:
          'SidebarLink is a global component that shows up on the left side of the screen, allowing users to navigate through the app.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SidebarLink>;

export const Default: Story = {
  args: {
    item: {
      name: 'Home',
      icon: HomeIcon,
      slug: '#home',
    },
    isActive: false,
    // onClose: () => {},
  },
};

export const Active: Story = {
  args: {
    item: {
      name: 'Home',
      icon: HomeIcon,
      slug: '#home',
    },
    isActive: true,
    // onClose: () => {},
  },
};
