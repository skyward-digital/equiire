import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '.';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component:
          'DatePicker is a component where a user can click on a field and then select a date from a calendar',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {};

export const Expanded: Story = {
  args: {
    defaultOpen: true,
  },
};
