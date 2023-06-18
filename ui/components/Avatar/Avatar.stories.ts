import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: 'Avatar allows a user to log in with email and password.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: 'https://a.storyblok.com/f/180053/1200x1600/bbce43daaf/dan-spratling-profile-picture.jpg/m/1200x1200',
    alt: 'Avatar',
  },
};

export const Large: Story = {
  args: {
    src: 'https://a.storyblok.com/f/180053/1200x1600/bbce43daaf/dan-spratling-profile-picture.jpg/m/1200x1200',
    alt: 'Avatar',
    width: 100,
    height: 100,
  },
};

export const Text: Story = {
  args: {
    children: 'AV',
    className: 'bg-gray-500 text-white',
  },
};

export const Fallback: Story = {};
