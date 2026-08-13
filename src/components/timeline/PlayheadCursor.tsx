import React from 'react';

interface PlayheadCursorProps {
  currentTime: number;
}

export const PlayheadCursor: React.FC<PlayheadCursorProps> = ({ currentTime }) => {
  const leftPx = currentTime * 30;

  return (
    <div
      role="presentation"
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: `${leftPx}px`,
        width: '2px',
        backgroundColor: '#38bdf8',
        pointerEvents: 'none',
        zIndex: 20,
      }}
    >
      <div
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: '#38bdf8',
          borderRadius: '50%',
          transform: 'translateX(-3px)',
        }}
      />
    </div>
  );
};
