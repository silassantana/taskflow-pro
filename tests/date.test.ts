import { formatDate } from '../client/src/utils/date';

describe('formatDate', () => {
  it('formats Date instances as calendar dates', () => {
    expect(formatDate(new Date('2026-08-17T21:45:00.000Z'))).toBe('2026-08-17');
  });

  it('formats ISO strings and handles missing values', () => {
    expect(formatDate('2025-01-02T08:30:00.000Z')).toBe('2025-01-02');
    expect(formatDate()).toBe('N/A');
  });

  it('handles invalid date input without throwing', () => {
    expect(formatDate('not-a-date')).toBe('N/A');
    expect(formatDate(new Date(Number.NaN))).toBe('N/A');
  });
});
