export const getDateWithoutTimezone = (date: Date | string) => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  // Dates in the db are saved in the following format: YYYY-DD-MMT00:00:00.000Z
  // Creates a new Date object using only the year, month, and date to avoid timezone issues from UTC time.
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
};
