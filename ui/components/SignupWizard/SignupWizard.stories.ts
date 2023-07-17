import type { Meta, StoryObj } from '@storybook/react';
import { SignupWizard } from '.';

const meta: Meta<typeof SignupWizard> = {
  title: 'Components/SignupWizard',
  component: SignupWizard,
  parameters: {
    docs: {
      description: {
        component: 'SignupWizard allows a user to create a new account.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SignupWizard>;

export const Default: Story = {
  args: {
    step: 0,
    setStep: () => {},
  },
};
