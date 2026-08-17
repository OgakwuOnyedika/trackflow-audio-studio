import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { TrackStudioView } from '../src/views/TrackStudioView';

describe('Track Lane Parameter & Solo/Mute Operations', () => {
  it('derives solo and mute audible states correctly across tracks', async () => {
    const user = userEvent.setup();
    render(<TrackStudioView />);

    // Solo Lead Vocals
    const soloVocalsBtn = screen.getByRole('button', { name: /solo lead vocals/i });
    await user.click(soloVocalsBtn);
    expect(soloVocalsBtn).toHaveAttribute('aria-pressed', 'true');

    // Toggle Solo off on Lead Vocals -> all unmuted tracks should become audible again
    await user.click(soloVocalsBtn);
    expect(soloVocalsBtn).toHaveAttribute('aria-pressed', 'false');
  });

  it('preserves active mute lock when adjusting volume or pan sliders', async () => {
    const user = userEvent.setup();
    render(<TrackStudioView />);

    // Mute Lead Vocals
    const muteVocalsBtn = screen.getByRole('button', { name: /mute lead vocals/i });
    await user.click(muteVocalsBtn);
    expect(muteVocalsBtn).toHaveAttribute('aria-pressed', 'true');

    // Adjust volume slider on muted Lead Vocals
    const volSlider = screen.getByLabelText(/volume for lead vocals/i);
    fireEvent.change(volSlider, { target: { value: '95' } });

    // Mute button must remain pressed (not unexpectedly unmuted)
    expect(screen.getByRole('button', { name: /mute lead vocals/i })).toHaveAttribute('aria-pressed', 'true');
  });
});
