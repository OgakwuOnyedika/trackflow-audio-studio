import React from 'react';
import { AudioClip } from '../../types/audio';

interface ClipBlockProps {
  clip: AudioClip;
  isAudible: boolean;
}

export const ClipBlock: React.FC<ClipBlockProps> = ({ clip, isAudible }) => {
  const leftPx = clip.startSeconds * 30;
  const widthPx = clip.durationSeconds * 30;

  return (
    <div
      role="article"
      aria-label={`Audio clip: ${clip.title}`}
      style={{
        position: 'absolute',
        left: `${leftPx}px`,
        width: `${widthPx}px`,
        top: '8px',
        bottom: '8px',
        backgroundColor: isAudible ? clip.color : '#374151',
        borderRadius: '6px',
        padding: '6px 8px',
        fontSize: '0.75rem',
        fontWeight: 600,
        color: '#0b0f19',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        opacity: isAudible ? 1 : 0.4,
        border: '1px solid rgba(255, 255, 255, 0.2)',
      }}
    >
      {clip.title}
    </div>
  );
};
