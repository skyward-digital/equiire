import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component: 'Header component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Header>;

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
      // __v: 0,
    },
  },
};
