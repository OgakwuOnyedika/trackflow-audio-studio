import React from 'react';
import { TrackType } from '../../types/audio';

interface TrackBadgeProps {
  type: TrackType;
}

export const TrackBadge: React.FC<TrackBadgeProps> = ({ type }) => {
  return (
    <span
      role="status"
      aria-label={`Track type ${type}`}
      style={{
        fontSize: '0.6875rem',
        textTransform: 'uppercase',
        fontWeight: 700,
        letterSpacing: '0.05em',
        padding: '2px 6px',
        borderRadius: '4px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        color: 'var(--tf-text-main)',
      }}
    >
      {type}
    </span>
  );
};
