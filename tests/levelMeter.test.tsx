import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { LevelMeter } from '../src/components/common/LevelMeter';

describe('LevelMeter Component', () => {
  it('renders level 0 when track is not audible', () => {
    render(<LevelMeter level={85} isAudible={false} />);
    const meter = screen.getByRole('progressbar', { name: /audio level meter/i });
    expect(meter).toHaveAttribute('aria-valuenow', '0');
  });

  it('renders active level when audible', () => {
    render(<LevelMeter level={85} isAudible={true} />);
    const meter = screen.getByRole('progressbar', { name: /audio level meter/i });
    expect(meter).toHaveAttribute('aria-valuenow', '85');
  });
});
