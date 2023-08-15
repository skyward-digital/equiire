import type { User } from '#/api/profile/user';

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

export type Loan = {
  _id: string;
  type: string;
  amount: number;
  currency: string;
  length: number;
  monthlyPayment: number;
  apr: number;
  interestType: string;
  totalRepayable: number;
  creditCost: number;
  dateCreated: string;
  startDate: string;
  endDate: string;
  product: string;
  price: string;
  paymentMethod: string;
  user: User;
  signatureRequestId: string;
  signatureDocumentId: string;
  signatureDocumentUrl: string;
  signatureCompleted: true;
  subscription: string;
  recordStatus: string; // 'ACTIVE'
  __v: number;
  loanStatus: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'REJECTED';
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
