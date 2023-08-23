export const getLocalAdjustedDate = (date: Date | string) => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
};
