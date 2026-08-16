import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { MuteSoloButtons } from '../src/components/track/MuteSoloButtons';

describe('MuteSoloButtons Component', () => {
  it('renders mute and solo buttons with accessible pressed attributes', async () => {
    const user = userEvent.setup();
    const handleMute = vi.fn();
    const handleSolo = vi.fn();

    render(
      <MuteSoloButtons
        isMuted={false}
        isSolo={true}
        trackName="Lead Vocals"
        onToggleMute={handleMute}
        onToggleSolo={handleSolo}
      />
    );

    const muteBtn = screen.getByRole('button', { name: /mute lead vocals/i });
    const soloBtn = screen.getByRole('button', { name: /solo lead vocals/i });

    expect(muteBtn).toHaveAttribute('aria-pressed', 'false');
    expect(soloBtn).toHaveAttribute('aria-pressed', 'true');

    await user.click(muteBtn);
    expect(handleMute).toHaveBeenCalledTimes(1);
  });
});
