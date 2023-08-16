import { signIn, signOut } from 'next-auth/react';
import formatISO from 'date-fns/formatISO';
import parse from 'date-fns/parse';
import { Loan } from '#/app/(login)/sign-up/page';

export const signup = async (data: {
  email: string;
  password: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  company: string;
  name: string;
  postalCode: string;
  state: string;
  loan: Loan;
  phone: string;
}) => {
  const {
    email,
    password,
    addressLine1,
    addressLine2,
    city,
    state,
    postalCode,
    company,
    name,
    loan,
    phone,
  } = data;

  // Check if the loan details are present and valid
  if (
    !loan ||
    !loan.type ||
    !loan.amount ||
    !loan.length ||
    !loan.monthlyPayment ||
    !loan.startDate
  ) {
    return { error: 'Missing or invalid loan details.' };
  }

  const res = await fetch('/api/signup', {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
      address: {
        addressLine1,
        addressLine2,
        city,
        state,
        postalCode,
        country: 'United States',
      },
      phone,
      company,
      password,
      loan: {
        type: loan.type,
        amount: parseInt(loan.amount),
        length: parseInt(loan.length),
        monthlyPayment: parseInt(loan.monthlyPayment),
        startDate: formatISO(parse(loan.startDate, 'yyyy-MM-dd', new Date())),
      },
    }),
  });
  if (res.ok) {
    return { error: null };
  } else {
    const response = await res.json();
    return { error: response.error };
  }
};

export const login = async (data: { email: string; password: string }) => {
  const res = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (res.ok) {
    await signIn('credentials', {
      email: data.email,
      password: data.password,
      callbackUrl: '/overview',
    });
    return { error: null };
  } else {
    const response = await res.json();
    return { error: response.error };
  }
};

export const logout = async () => {
  await fetch('/api/logout', {
    method: 'POST',
  });

  await signOut({ callbackUrl: '/login' });
};

export const forgotPassword = async (data: { email: string }) => {
  const res = await fetch('/api/forgot-password', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return res.ok
    ? { success: true }
    : { success: false, message: 'Email not found' };
};

export const resetPassword = async (data: {
  email: string;
  password: string;
  confirmationCode: string;
}) => {
  const res = await fetch('/api/reset-password', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  return res.ok
    ? { success: true }
    : { success: false, message: 'Password not reset' };
};
