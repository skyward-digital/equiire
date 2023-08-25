import { Loan } from '#/app/api/loans';
import { getDateWithoutTimezone } from './getDateWithoutTimezone';

// This function calculates whether the loan has a start date before today
export const isExpiredLoan = (loan: Loan) => {
  return (
    getDateWithoutTimezone(new Date(loan.startDate)) <
    getDateWithoutTimezone(new Date())
  );
};
