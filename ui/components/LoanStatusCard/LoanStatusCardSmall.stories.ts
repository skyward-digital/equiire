import type { Meta, StoryObj } from '@storybook/react';
import { LoanStatusCardSmall } from './LoanStatusCardSmall';

const meta: Meta<typeof LoanStatusCardSmall> = {
  title: 'Components/LoanStatusCard/Small',
  component: LoanStatusCardSmall,
  parameters: {
    docs: {
      description: {
        component:
          'The loan status card component that shows an overview of the loan in its current state, usually in progress but occasionally may need to show pending states',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LoanStatusCardSmall>;

const args = {
  id: '123456',
  status: 'completed',
  value: 100000,
  startDate: '2021-01-01',
  endDate: '2022-01-01',
};

export const Default: Story = {
  args,
};
