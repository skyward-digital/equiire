export type PaymentMethods = {
  docs: PaymentMethod[];
  totalDocs: number;
  totalPages: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number;
  nextPage: number;
};

export type PaymentMethod = CardPaymentMethod | BankPaymentMethod;

type CardPaymentMethod = {
  id: string;
  type: 'card';
  paymentMethodInfo: {
    brand: string;
    last4: string;
    funding: string;
  };
};

type BankPaymentMethod = {
  id: string;
  type: 'us_bank_account';
  paymentMethodInfo: {
    bankName: string;
    accountType: string;
  };
};
