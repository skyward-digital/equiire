import {
  HomeIcon,
  CreditCardIcon,
  Cog8ToothIcon,
  ArrowLeftIcon,
  BanknotesIcon,
  // @ts-ignore
} from '@heroicons/react/24/outline';

export type Item = {
  name: string;
  slug: string;
  description?: string;
  icon?: any;
};

export const navigation: { name?: string; items: Item[] }[] = [
  {
    // name: '',
    items: [
      {
        name: 'Home',
        icon: HomeIcon,
        slug: 'overview',
      },
      {
        name: 'Loans',
        icon: BanknotesIcon,
        slug: 'loans',
      },
      {
        name: 'Payment',
        icon: CreditCardIcon,
        slug: 'history',
      },
      {
        name: 'Settings',
        icon: Cog8ToothIcon,
        slug: 'settings',
      },
    ],
  },
  // {
  //   name: 'Logged out Pages',
  //   items: [
  //     {
  //       name: 'Login',
  //       slug: 'login',
  //     },
  //     {
  //       name: 'Sign Up',
  //       slug: 'sign-up',
  //     },
  //     {
  //       name: 'Loan Application',
  //       slug: '#',
  //     },
  //   ],
  // },
  {
    // name: '',
    items: [
      {
        name: 'Logout',
        icon: ArrowLeftIcon,
        slug: 'logout',
      },
    ],
  },
];
