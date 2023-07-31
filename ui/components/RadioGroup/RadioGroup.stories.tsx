import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, Option, RadioGroupProps } from '.';
import { useState } from 'react';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          'RadioGroup component is like a switch, where users have two named options to choose from.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

// This mocks the state of the component
function StoryRender(props: Omit<RadioGroupProps, 'onChange' | 'value'>) {
  const [value, setValue] = useState('credit-builder');

  return <RadioGroup {...props} value={value} onChange={setValue} />;
}

const args = {
  options: [
    {
      label: 'Credit Builder',
      value: 'credit-builder',
    },
    {
      label: 'Standard Loan',
      value: 'standard',
    },
  ] as [Option, Option],
  defaultValue: 'standard',
  ariaLabel: 'Choose your loan',
  id: 'loan-type',
};

export const Default: Story = {
  args,
  render: (args) => {
    return <StoryRender {...args} />;
  },
};
