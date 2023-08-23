import { User } from '#/app/api/profile/user';

export const getCustomerFields = (user: User) => {
  const { fullLegalName, dateOfBirth, phone, ssn, address } = user;
  return { fullLegalName, dateOfBirth, phone, ssn, address };
};
