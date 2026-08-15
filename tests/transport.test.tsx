import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useTransportPlayback } from '../src/hooks/useTransportPlayback';

describe('useTransportPlayback hook', () => {
  it('transitions between stop, play, and pause states', () => {
    const { result } = renderHook(() => useTransportPlayback(128));

    expect(result.current.transport.isPlaying).toBe(false);
    expect(result.current.transport.bpm).toBe(128);

    act(() => {
      result.current.play();
    });
    expect(result.current.transport.isPlaying).toBe(true);

    act(() => {
      result.current.pause();
    });
    expect(result.current.transport.isPlaying).toBe(false);
  });
});
