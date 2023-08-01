import type { Meta, StoryObj } from '@storybook/react';
import { OtpForm } from '.';

const meta: Meta<typeof OtpForm> = {
  title: 'Components/OneTimePassword/Form',
  component: OtpForm,
  parameters: {
    docs: {
      description: {
        component:
          'The One-Time-Password (Otp) form component allows a user to enter a one-time-password sent via email',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof OtpForm>;

export const Default: Story = {
  args: {
    onSuccess: () => {},
  },
};
