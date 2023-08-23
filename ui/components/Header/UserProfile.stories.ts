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
      email: 'johndoe@acme.com',
      name: 'John Doe',
      sub: '123',
      paymentCustomerId: 'cus_123',
      contact: 'Jane Doe',
      address: {
        addressLine1: '123 Main St',
        addressLine2: 'Suite 100',
        city: 'Anytown',
        state: 'CA',
        postalCode: '12345',
        country: 'USA',
      },
      legalBusinessName: 'Acme Incorporated International LTD',
      company: 'Acme Inc',
      ein: '1234',
      entityType: 'Sole Trader',
      businessAddress: {
        addressLine1: '123 Main St',
        addressLine2: 'Suite 100',
        city: 'Anytown',
        state: 'CA',
        postalCode: '12345',
        country: 'USA',
      },
      businessPhone: '123-456-7890',
      formationDate: '2003-08-21T23:24:46.963Z',
      website: 'https://www.website.com',
      industry: 'Agriculture',
      fullLegalName: 'Jane Claire Doe',
      dateOfBirth: '1983-08-21T23:24:46.963Z',
      phone: '123-456-7890',
      ssn: '1234',
      recordStatus: 'ACTIVE',
      // __v: 0,
    },
  },
};
