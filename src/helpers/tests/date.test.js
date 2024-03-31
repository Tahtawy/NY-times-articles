import { formatDate } from '../date.utils'; // Adjust the path accordingly

describe('formatDate', () => {
  test('formats a valid date correctly', () => {
    const formattedDate = formatDate('2024-04-01');
    expect(formattedDate).toBe('April 1, 2024');
  });

  test('returns an empty string for an invalid date', () => {
    const formattedDate = formatDate('invalid-date');
    expect(formattedDate).toBe('');
  });

  test('formats dates in different locales', () => {
    expect(formatDate('2024-04-01', 'ja-JP')).toBe('2024年4月1日'); // Japanese format
    expect(formatDate('2024-04-01', 'de-DE')).toBe('1. April 2024'); // German format
  });

  test('handles different date separators', () => {
    expect(formatDate('2024/04/01')).toBe('April 1, 2024');
    expect(formatDate('2024.04.01')).toBe('April 1, 2024');
  });

  test('throws an error for invalid locale', () => {
    expect(() => formatDate('2024-04-01', '')).toThrow(RangeError);
  });
});
