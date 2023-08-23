export const getLocalAdjustedDate = (date: Date) => {
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
};
