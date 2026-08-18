import { calculateProgress } from '../server/src/services/analyticsService';

describe('calculateProgress', () => {
  it('calculates rounded project completion', () => {
    expect(calculateProgress(3, 2)).toEqual({ total: 3, done: 2, percent: 67 });
  });

  it('handles empty projects', () => {
    expect(calculateProgress(0, 0)).toEqual({ total: 0, done: 0, percent: 0 });
  });

  it('keeps inconsistent counts within valid progress bounds', () => {
    expect(calculateProgress(2, 3)).toEqual({ total: 2, done: 2, percent: 100 });
    expect(calculateProgress(2, -1)).toEqual({ total: 2, done: 0, percent: 0 });
  });
});
