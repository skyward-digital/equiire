import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { OtpInput } from '.';

const meta: Meta<typeof OtpInput> = {
  title: 'Components/OneTimePassword/Input',
  component: OtpInput,
  parameters: {
    docs: {
      description: {
        component:
          'The One-Time-Password (Otp) input component is responsible for designating the structure of the OTP input form. This story is uneditable as it relies on state to update',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof OtpInput>;

export const Default: Story = {
  args: {
    value: '123456',
    valueLength: 6,
    onChange: () => {},
  },
};
