import type { Meta, StoryObj } from '@storybook/react';
import { UserProfile } from './UserProfile';

const meta: Meta<typeof UserProfile> = {
  title: 'Components/Header/UserProfile',
  component: UserProfile,
  parameters: {
    docs: {
      description: {
        component: 'User profile component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof UserProfile>;

export const Default: Story = {
  args: {
    user: {
      _id: '1',
      name: 'John Doe',
      email: 'johndoe@acme.com',
      company: 'Acme Inc',
      sub: '123',
      address: {
        addressLine1: '123 Main St',
        addressLine2: 'Suite 100',
        city: 'Anytown',
        state: 'CA',
        postalCode: '12345',
        country: 'USA',
      },
      phone: '123-456-7890',
      contact: 'Jane Doe',
      recordStatus: 'ACTIVE',
      paymentCustomerId: 'cus_123',
      ssn: '1234',
      ein: '1234',
      dateOfBirth: '1983-08-21T23:24:46.963Z',
    },
  },
};
