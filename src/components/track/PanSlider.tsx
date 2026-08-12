import React from 'react';

interface PanSliderProps {
  pan: number; // -50 to 50
  trackName: string;
  onChange: (val: number) => void;
}

export const PanSlider: React.FC<PanSliderProps> = ({ pan, trackName, onChange }) => {
  const panLabel = pan === 0 ? 'C' : pan < 0 ? `L${Math.abs(pan)}` : `R${pan}`;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <label htmlFor={`pan-${trackName}`} className="sr-only">
        {`Pan for ${trackName}`}
      </label>
      <input
        id={`pan-${trackName}`}
        type="range"
        min={-50}
        max={50}
        value={pan}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-valuetext={panLabel}
        aria-label={`Pan for ${trackName}`}
        style={{ width: '60px', height: '4px', cursor: 'pointer' }}
      />
      <span style={{ fontSize: '0.6875rem', fontFamily: 'monospace', color: 'var(--tf-text-muted)', width: '22px' }}>
        {panLabel}
      </span>
    </div>
  );
};
