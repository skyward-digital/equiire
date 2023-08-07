import { FormData } from '#/app/(login)/sign-up/page';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SignupForm, SignupFormProps } from '.';

const meta: Meta<typeof SignupForm> = {
  title: 'Components/SignupForm',
  component: SignupForm,
  parameters: {
    docs: {
      description: {
        component: 'SignupForm allows a user to create a new account.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SignupForm>;

function StoryRender(
  props: Omit<SignupFormProps, 'step' | 'setStep' | 'formData' | 'setFormData'>,
) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    company: '',
    name: '',
    postalCode: '',
    state: '',
  });
  return (
    <SignupForm
      {...props}
      step={step}
      setStep={setStep}
      formData={formData}
      setFormData={setFormData}
    />
  );
}

export const Default: Story = {
  render: (args) => {
    return <StoryRender {...args} />;
  },
};
