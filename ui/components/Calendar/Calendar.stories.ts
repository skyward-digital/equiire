import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '.';
import { subDays } from 'date-fns';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component:
          'Calendar is a component where a user chooses a date from a calendar',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    mode: 'single',
    selected: new Date(),
    // This component is only showing what it looks like at each state, it's not functional
    onSelect: () => {},
  },
};

export const DateInPast: Story = {
  args: {
    mode: 'single',
    selected: subDays(new Date(), 7), // seven days ago
    onSelect: () => {},
  },
};
