import { User } from '#/app/api/profile/user';

export const userProfileComplete = (user: User) => {
  return !!(
    user.company &&
    user.address &&
    user.phone &&
    user.ssn &&
    user.ein &&
    user.dateOfBirth
  );
};
