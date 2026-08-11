import React from 'react';
import { formatTimecode } from '../../utils/timecode';

interface TimecodeDisplayProps {
  currentTime: number;
}

export const TimecodeDisplay: React.FC<TimecodeDisplayProps> = ({ currentTime }) => {
  return (
    <div
      role="timer"
      aria-label="Timeline timecode"
      data-testid="timecode-display"
      style={{
        fontFamily: 'monospace',
        fontSize: '1.125rem',
        fontWeight: 700,
        backgroundColor: '#0b0f19',
        border: '1px solid #232f48',
        borderRadius: '6px',
        padding: '4px 12px',
        color: '#38bdf8',
        letterSpacing: '0.05em',
      }}
    >
      {formatTimecode(currentTime)}
    </div>
  );
};
