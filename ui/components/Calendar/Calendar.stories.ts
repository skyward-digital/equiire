import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '.';

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
    // Static dates so the story doesn't change every day
    defaultMonth: new Date(2023, 0, 8),
    today: new Date(2023, 0, 8),
    selected: new Date(2023, 0, 8),
    // This component is only showing what it looks like at each state, it's not functional
    onSelect: () => {},
  },
};

export const DateInPast: Story = {
  args: {
    mode: 'single',
    defaultMonth: new Date(2023, 0, 8),
    today: new Date(2023, 0, 8),
    selected: new Date(2023, 0, 5),
    onSelect: () => {},
  },
};
