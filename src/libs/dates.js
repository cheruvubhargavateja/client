export function minAndMaxDate() {
  // Define the minimum and maximum date
  const today = new Date();
  const minDate = new Date(today);
  minDate.setDate(today.getDate() + 1); // Current date + 1 day

  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 5); // Current date + 5 days

  // Format dates to 'YYYY-MM-DD'
  const minDateString = minDate.toISOString().split("T")[0];
  const maxDateString = maxDate.toISOString().split("T")[0];

  return { minDateString, maxDateString };
}
