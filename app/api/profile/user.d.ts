export type User = {
  _id: string;
  email: string;
  name: string;
  sub: string;
  paymentCustomerId: string;
  contact: string;
  address: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  legalBusinessName: string;
  company: string;
  ein: string;
  entityType: string;
  businessAddress: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  businessPhone: string;
  formationDate: string;
  website: string;
  industry: string;
  fullLegalName: string;
  dateOfBirth: string;
  phone: string;
  ssn: string;
  recordStatus: 'ACTIVE';
};
