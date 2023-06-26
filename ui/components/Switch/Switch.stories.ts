import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '.';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: 'Switch component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Dark Mode',
    onChange: () => console.log('mode switch'),
  },
};

export const Enabled: Story = {
  args: {
    label: 'Dark Mode',
    onChange: () => console.log('mode switch'),
    checked: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Dark Mode',
    size: 'sm',
    onChange: () => console.log('mode switch'),
  },
};

export const Large: Story = {
  args: {
    label: 'Dark Mode',
    size: 'lg',
    onChange: () => console.log('mode switch'),
  },
};

export const HiddenLabel: Story = {
  args: {
    label: 'Dark Mode',
    onChange: () => console.log('mode switch'),
    hideLabel: true,
  },
};
