import React from 'react';

interface MuteSoloButtonsProps {
  isMuted: boolean;
  isSolo: boolean;
  trackName: string;
  onToggleMute: () => void;
  onToggleSolo: () => void;
}

export const MuteSoloButtons: React.FC<MuteSoloButtonsProps> = ({
  isMuted,
  isSolo,
  trackName,
  onToggleMute,
  onToggleSolo,
}) => {
  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      <button
        type="button"
        aria-pressed={isMuted}
        aria-label={`Mute ${trackName}`}
        onClick={onToggleMute}
        style={{
          width: '26px',
          height: '24px',
          borderRadius: '4px',
          border: '1px solid #232f48',
          backgroundColor: isMuted ? 'var(--tf-mute)' : 'var(--tf-bg-base)',
          color: isMuted ? '#ffffff' : 'var(--tf-text-muted)',
          fontWeight: 800,
          fontSize: '0.6875rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        M
      </button>

      <button
        type="button"
        aria-pressed={isSolo}
        aria-label={`Solo ${trackName}`}
        onClick={onToggleSolo}
        style={{
          width: '26px',
          height: '24px',
          borderRadius: '4px',
          border: '1px solid #232f48',
          backgroundColor: isSolo ? 'var(--tf-solo)' : 'var(--tf-bg-base)',
          color: isSolo ? '#0b0f19' : 'var(--tf-text-muted)',
          fontWeight: 800,
          fontSize: '0.6875rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        S
      </button>
    </div>
  );
};
