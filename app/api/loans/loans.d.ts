import type { User } from '#/api/profile/user';

export type Loans = {
  docs: LoanData[];
  totalDocs: number;
  totalPages: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
};

export type Loan = {
  message: string;
  status: string;
  data: loanData;
};

export type LoanData = {
  _id: string;
  type: string;
  amount: number;
  currency: string;
  monthlyPayment: number;
  length: number;
  interestType: string;
  apr: number;
  totalRepayable: number;
  creditCost: number;
  dateCreated: string;
  startDate: string;
  endDate?: string;
  product: string;
  price: string;
  paymentMethod: string;
  user: User;
  signatureRequestId: string;
  signatureDocumentId: string;
  signatureDocumentUrl: string;
  signatureCompleted: boolean;
  subscription: string;
  recordStatus: string;
  loanStatus: string;
  recordStatus: string;
  __v: number;
};
