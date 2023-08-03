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

export type PaymentMethod = {
  id: string;
  customer: string;
  type: string;
  paymentMethodInfo: {
    brand: string;
    last4: string;
    funding: string;
  };
};
