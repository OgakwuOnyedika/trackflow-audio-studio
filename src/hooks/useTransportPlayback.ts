import { useEffect, useState } from 'react';
import { TransportState } from '../types/audio';

export function useTransportPlayback(initialBpm = 120) {
  const [transport, setTransport] = useState<TransportState>({
    isPlaying: false,
    currentTime: 0,
    bpm: initialBpm,
    masterVolume: 85,
  });

  useEffect(() => {
    if (!transport.isPlaying) return;

    const interval = setInterval(() => {
      setTransport((prev) => ({
        ...prev,
        currentTime: prev.currentTime >= 24 ? 0 : Number((prev.currentTime + 0.1).toFixed(2)),
      }));
    }, 100);

    return () => clearInterval(interval);
  }, [transport.isPlaying]);

  const play = () => setTransport((p) => ({ ...p, isPlaying: true }));
  const pause = () => setTransport((p) => ({ ...p, isPlaying: false }));
  const stop = () => setTransport((p) => ({ ...p, isPlaying: false, currentTime: 0 }));
  const seek = (time: number) => setTransport((p) => ({ ...p, currentTime: time }));

  return { transport, setTransport, play, pause, stop, seek };
}
