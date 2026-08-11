import React from 'react';

interface LevelMeterProps {
  level: number; // 0 to 100
  isAudible: boolean;
}

export const LevelMeter: React.FC<LevelMeterProps> = ({ level, isAudible }) => {
  const displayLevel = isAudible ? level : 0;

  return (
    <div
      role="progressbar"
      aria-label="Audio level meter"
      aria-valuenow={displayLevel}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{
        width: '6px',
        height: '40px',
        backgroundColor: '#0b0f19',
        borderRadius: '3px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column-reverse',
      }}
    >
      <div
        style={{
          width: '100%',
          height: `${displayLevel}%`,
          backgroundColor: displayLevel > 85 ? '#ef4444' : displayLevel > 60 ? '#f59e0b' : '#10b981',
          transition: 'height 0.1s ease',
        }}
      />
    </div>
  );
};
