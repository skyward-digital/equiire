import formatISO from 'date-fns/formatISO';
import parse from 'date-fns/parse';
import { Loan } from '#/app/(login)/sign-up/SignUp';

export const signup = async (data: {
  email: string;
  password: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  company?: string;
  name: string;
  postalCode?: string;
  state?: string;
  loan: Loan;
  phone?: string;
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

  let parsedLoan = {};

  // It's possible for the user to sign up without loan details but if a loan is present then we should validate it
  if (loan) {
    // If all the required fields exist we should parse the loan
    if (
      loan.type &&
      loan.amount &&
      loan.length &&
      loan.monthlyPayment &&
      loan.startDate &&
      loan.creditCost
    ) {
      parsedLoan = {
        type: loan.type,
        amount: parseInt(loan.amount),
        length: parseInt(loan.length),
        monthlyPayment: parseInt(loan.monthlyPayment),
        startDate: formatISO(parse(loan.startDate, 'yyyy-MM-dd', new Date())),
        apr: Number(loan.apr),
        creditCost: parseInt(loan.creditCost),
      };
    }
  }

  const res = await fetch('/api/auth/signup', {
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
        country: 'US',
      },
      phone,
      company,
      password,
      loan: parsedLoan,
    }),
  });

  if (res.ok) {
    return { error: null };
  } else {
    const response = await res.json();
    return { error: response.error };
  }
};
