import React from 'react';

interface VolumeFaderProps {
  volume: number; // 0 to 100
  trackName: string;
  onChange: (val: number) => void;
}

export const VolumeFader: React.FC<VolumeFaderProps> = ({ volume, trackName, onChange }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <label htmlFor={`vol-${trackName}`} className="sr-only">
        {`Volume for ${trackName}`}
      </label>
      <input
        id={`vol-${trackName}`}
        type="range"
        min={0}
        max={100}
        value={volume}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={`Volume for ${trackName}`}
        style={{ width: '70px', height: '4px', cursor: 'pointer' }}
      />
      <span style={{ fontSize: '0.6875rem', fontFamily: 'monospace', color: 'var(--tf-text-muted)', width: '26px' }}>
        {volume}
      </span>
    </div>
  );
};
