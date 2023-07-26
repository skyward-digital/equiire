import type { Meta, StoryObj } from '@storybook/react';
import { SliderGroup, SliderGroupProps } from '.';
import { useState } from 'react';

const meta: Meta<typeof SliderGroup> = {
  title: 'Components/SliderGroup',
  component: SliderGroup,
  parameters: {
    docs: {
      description: {
        component:
          'SliderGroup component is made up of a select component which controls a progress bar',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SliderGroup>;

// This mocks the state of the component
function StoryRender(props: Omit<SliderGroupProps, 'onChange' | 'value'>) {
  const [value, setValue] = useState('10000');

  return <SliderGroup {...props} value={value} onChange={setValue} />;
}

export const Default: Story = {
  args: {
    label: 'Loan Amount',
    min: 1000,
    max: 20000,
    type: 'currency',
    options: [1000, 10000, 20000],
  },
  render: (args) => {
    return <StoryRender {...args} />;
  },
};
