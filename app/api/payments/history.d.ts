export type PaymentHistory = {
  docs: HistoryDoc[];
  totalDocs: number;
  totalPages: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
};

export type HistoryDoc = {
  id: string;
  invoiceId: string;
  created: string;
  amount: number;
  status: string;
  invoiceStatus: string;
  loan: {
    id: string;
    type: 'CREDIT_BUILDER' | 'STANDARD';
    startDate: string;
  };
  paymentMethod: {
    id: string;
    type: string;
    paymentMethodInfo: {
      brand: string;
      last4: string;
      funding: string;
    };
  };
  totalAmount: number;
  amountRemaining: number;
  error: string;
};
