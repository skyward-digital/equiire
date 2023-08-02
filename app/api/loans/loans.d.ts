import type { User } from '#/api/profile/user';

export type Loans = {
  docs: Loan['data'][];
  totalDocs: number;
  totalPages: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
};

export type Loan = {
  message: 'string';
  status: string;
  data: {
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
    user: User;
    signatureCompleted: boolean;
    recordStatus: string;
    __v: number;
  };
};
