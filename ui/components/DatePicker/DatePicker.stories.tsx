import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker, DatePickerProps } from '.';

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

// This mocks the state of the component
function StoryRender(props: Omit<DatePickerProps, 'onValueChange' | 'value'>) {
  const [value, setValue] = useState(new Date());
  return <DatePicker {...props} value={value} onValueChange={setValue} />;
}

export const Default: Story = {
  render: (args) => {
    return <StoryRender {...args} />;
  },
};

export const Expanded: Story = {
  args: {
    defaultOpen: true,
  },
  render: (args) => {
    return <StoryRender {...args} />;
  },
};
