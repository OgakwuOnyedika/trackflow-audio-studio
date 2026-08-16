import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { AddTrackModal } from '../src/components/track/AddTrackModal';

describe('AddTrackModal Component', () => {
  it('submits new track with specified name and instrument', async () => {
    const user = userEvent.setup();
    const handleAdd = vi.fn();

    render(<AddTrackModal isOpen={true} onClose={() => {}} onAdd={handleAdd} />);

    const input = screen.getByLabelText(/track name/i);
    await user.type(input, 'Lead Guitar');

    const submitBtn = screen.getByRole('button', { name: /add track/i });
    await user.click(submitBtn);

    expect(handleAdd).toHaveBeenCalledTimes(1);
    expect(handleAdd.mock.calls[0][0].name).toBe('Lead Guitar');
  });
});
