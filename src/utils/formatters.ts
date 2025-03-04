/**
 * Format a number as currency
 * @param value - The number to format
 * @param currency - The currency symbol (default: '$')
 * @returns Formatted currency string
 */
export const formatCurrency = (
  value: number,
  currency: string = "$"
): string => {
  return `${currency}${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
};

/**
 * Format a date string to a more readable format
 * @param dateString - The date string to format
 * @returns Formatted date string
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
};

/**
 * Format a number with thousand separators
 * @param value - The number to format
 * @returns Formatted number string
 */
export const formatNumber = (value: number): string => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

/**
 * Format a percentage value
 * @param value - The number to format as percentage
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted percentage string
 */
export const formatPercentage = (
  value: number,
  decimals: number = 2
): string => {
  return `${value.toFixed(decimals)}%`;
};
