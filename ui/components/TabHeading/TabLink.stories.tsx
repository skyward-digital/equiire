import type { Meta, StoryObj } from '@storybook/react';
import { TabLink } from '.';

const meta: Meta<typeof TabLink> = {
  title: 'Components/TabHeading/TabLink',
  component: TabLink,
  parameters: {
    docs: {
      description: {
        component:
          'TabLink is used within TabHeading to create styled links - usually anchor links',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TabLink>;

export const Default: Story = {
  args: {
    title: 'Tab Heading',
    href: '#',
  },
};

export const Active: Story = {
  args: {
    title: 'Tab Heading',
    href: '#',
    active: true,
  },
};
