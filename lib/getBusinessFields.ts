import { User } from '#/app/api/profile/user';

export const getBusinessFields = (user: User) => {
  const {
    legalBusinessName,
    company,
    ein,
    entityType,
    businessAddress,
    businessPhone,
    formationDate,
    website,
    industry,
  } = user;
  return {
    legalBusinessName,
    company,
    ein,
    entityType,
    businessAddress,
    businessPhone,
    formationDate,
    website,
    industry,
  };
};
