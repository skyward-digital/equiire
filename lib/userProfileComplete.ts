import { User } from '#/app/api/profile/user';

export const userProfileComplete = (user: User) => {
  return !!(
    // personal information
    (
      user.name &&
      user.fullLegalName &&
      user.address.addressLine1 &&
      user.address.city &&
      user.address.state &&
      user.address.postalCode &&
      user.dateOfBirth &&
      user.phone &&
      user.ssn &&
      // company information
      user.legalBusinessName &&
      user.company &&
      user.entityType &&
      user.businessAddress.addressLine1 &&
      user.businessAddress.city &&
      user.businessAddress.state &&
      user.businessAddress.postalCode &&
      user.businessPhone &&
      user.formationDate &&
      user.industry
    )
  );
};
