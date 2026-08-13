import React from 'react';

interface TimelineRulerProps {
  totalSeconds?: number;
}

export const TimelineRuler: React.FC<TimelineRulerProps> = ({ totalSeconds = 24 }) => {
  return (
    <div
      role="presentation"
      style={{
        height: '24px',
        backgroundColor: '#0b0f19',
        borderBottom: '1px solid var(--tf-border)',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '280px',
        fontSize: '0.6875rem',
        color: 'var(--tf-text-dim)',
      }}
    >
      {Array.from({ length: totalSeconds / 2 }, (_, i) => i * 2).map((sec) => (
        <div key={sec} style={{ width: '60px', borderLeft: '1px solid #232f48', paddingLeft: '4px' }}>
          {sec}s
        </div>
      ))}
    </div>
  );
};
