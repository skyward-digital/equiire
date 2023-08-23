import type { User } from '#/api/profile/user';

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
