export function convertUTCToLocal(utcString) {
    // Parse the UTC string into a Date object
    const utcDate = new Date(utcString);
  
    // Format the date and time using toLocaleString
    // This example uses the user's local time zone and default locale
    const formattedDate = utcDate.toLocaleString();
  
    return formattedDate;
  }