import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { TrackStudioView } from '../src/views/TrackStudioView';

describe('TrackStudioView Timeline Operations', () => {
  it('renders initial tracks with transport bar', () => {
    render(<TrackStudioView />);
    expect(screen.getByText('Lead Vocals')).toBeInTheDocument();
    expect(screen.getByText('Acoustic Drums')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /start playback/i })).toBeInTheDocument();
  });

  it('allows toggling play and pause', async () => {
    const user = userEvent.setup();
    render(<TrackStudioView />);

    const playBtn = screen.getByRole('button', { name: /start playback/i });
    await user.click(playBtn);

    expect(screen.getByRole('button', { name: /pause playback/i })).toBeInTheDocument();
  });
});
