import { describe, expect, it } from 'vitest';
import { formatTimecode } from '../src/utils/timecode';

describe('formatTimecode utility', () => {
  it('formats zero seconds accurately', () => {
    expect(formatTimecode(0)).toBe('00:00.00');
  });

  it('formats fractional seconds with minute overflow', () => {
    expect(formatTimecode(65.5)).toBe('01:05.50');
  });
});
