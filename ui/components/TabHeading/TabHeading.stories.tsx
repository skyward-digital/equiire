import type { Meta, StoryObj } from '@storybook/react';
import { TabHeading, TabLink } from '.';

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
    children: (
      <>
        <TabLink title="Tab 1" href="#" active />
        <TabLink title="Tab 2" href="#" />
        <TabLink title="Tab 3" href="#" />
      </>
    ),
  },
};
