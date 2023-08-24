/* 
All dates in the database are saved in the following format: YYYY-DD-MMT00:00:00.000Z
The getDateWithoutTimezone function creates a new Date object using only the year, month, and date to avoid timezone issues from UTC time.

This function is only used on the frontend:
- To display the correct date to the user
- To evaluate any date display logic (for example, show the loans with a start date before today)
    -> If you're making any comparisons, make sure to apply this function to all of the dates you are comparing
*/
export const getDateWithoutTimezone = (date: Date | string) => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  // Creates a new Date object using only the year, month, and date
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
};
