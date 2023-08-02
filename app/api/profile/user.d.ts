export type User = {
  _id: 'string';
  email: 'string';
  name: 'string';
  sub: 'string';
  paymentCustomerId: 'string';
  address: {
    addressLine1: 'string';
    addressLine2: 'string';
    city: 'string';
    state: 'string';
    postalCode: 'string';
    country: 'string';
  };
  phone: 'string';
  company: 'string';
  contact: 'string';
  recordStatus: 'ACTIVE';
};
