import { Loan } from './[id]/loan';

export type Loans = {
  docs: Loan[];
  totalDocs: number;
  totalPages: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
};

export type LoanTransactions = {
  message: string;
  status: 'SUCCESS';
  data: LoanFutureTransaction[] | LoanPastTransaction[];
};

export type LoanPastTransaction = {
  id: string;
  invoiceId: string;
  created: string;
  amount: number;
  paymentMethod: {
    id: string;
    type: string;
    paymentMethodInfo: { brand: string; last4: string; funding: string };
  };
  status: string;
  invoiceStatus: string;
  totalAmount: number;
  amountRemaining: number;
  loan: {
    id: string;
    type: string;
    startDate: string;
  };
};

export type LoanFutureTransaction = {
  status: 'SCHEDULED';
  date: string;
  amount: number;
};
