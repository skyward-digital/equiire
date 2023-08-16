import type { Meta, StoryObj } from '@storybook/react';
import { TabHeading } from '.';

const meta: Meta<typeof TabHeading> = {
  title: 'Components/TabHeading/TabHeading',
  component: TabHeading,
  parameters: {
    docs: {
      description: {
        component:
          'TabHeading is a wrapper component that provides a sticky navigation for tabs. It should be used with TabLink to provide full functionality',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TabHeading>;

export const Default: Story = {
  args: {
    links: [
      { id: 'details', title: 'Company Details' },
      { id: 'security', title: 'Security' },
      { id: 'payment', title: 'Cards/Banks' },
    ],
  },
};

export const WithChildren: Story = {
  args: {
    links: [
      { id: 'details', title: 'Company Details' },
      { id: 'security', title: 'Security' },
      { id: 'payment', title: 'Cards/Banks' },
    ],
    children: (
      <div className="flex items-center space-x-4">
        <button className="btn btn-primary">Save</button>
      </div>
    ),
  },
};
