import React from 'react';
import { Button } from '../common/Button';
import { PauseIcon, PlayIcon, StopIcon } from '../common/Icons';
import { TimecodeDisplay } from './TimecodeDisplay';

interface TransportBarProps {
  isPlaying: boolean;
  currentTime: number;
  bpm: number;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
  onAddTrack: () => void;
}

export const TransportBar: React.FC<TransportBarProps> = ({
  isPlaying,
  currentTime,
  bpm,
  onPlay,
  onPause,
  onStop,
  onAddTrack,
}) => {
  return (
    <header
      role="banner"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 20px',
        backgroundColor: 'var(--tf-bg-surface)',
        borderBottom: '1px solid var(--tf-border)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <h1 style={{ fontSize: '1rem', fontWeight: 800, color: '#38bdf8' }}>TrackFlow Studio</h1>
        <TimecodeDisplay currentTime={currentTime} />
        <span style={{ fontSize: '0.8125rem', color: 'var(--tf-text-muted)', fontFamily: 'monospace' }}>
          {bpm} BPM
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {isPlaying ? (
          <Button variant="primary" onClick={onPause} aria-label="Pause playback">
            <PauseIcon size={16} /> Pause
          </Button>
        ) : (
          <Button variant="primary" onClick={onPlay} aria-label="Start playback">
            <PlayIcon size={16} /> Play
          </Button>
        )}

        <Button onClick={onStop} aria-label="Stop playback">
          <StopIcon size={16} /> Stop
        </Button>
      </div>

      <div>
        <Button onClick={onAddTrack}>+ Add Track</Button>
      </div>
    </header>
  );
};
