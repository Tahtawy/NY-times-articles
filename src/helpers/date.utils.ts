export const formatDate = (inputDate: string, locale = 'en-US'): string => {
  try {
    const date = new Date(inputDate);
    if (isNaN(date.getTime())) {
      return ''; // Return empty string for invalid dates
    }
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(locale, options);
  } catch (error) {
    // Check for specific error related to invalid locale
    if (error instanceof RangeError) {
      throw new RangeError('Invalid locale provided');
    } else {
      console.error('Error formatting date:', error);
      return ''; // Return empty string on other errors
    }
  }
};
