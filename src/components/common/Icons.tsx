import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  title?: string;
}

export const PlayIcon: React.FC<IconProps> = ({ size = 16, title }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden={!title}>
    {title && <title>{title}</title>}
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

export const PauseIcon: React.FC<IconProps> = ({ size = 16, title }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden={!title}>
    {title && <title>{title}</title>}
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

export const StopIcon: React.FC<IconProps> = ({ size = 16, title }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden={!title}>
    {title && <title>{title}</title>}
    <rect x="4" y="4" width="16" height="16" />
  </svg>
);

export const PlusIcon: React.FC<IconProps> = ({ size = 16, title }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title}>
    {title && <title>{title}</title>}
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export const VolumeIcon: React.FC<IconProps> = ({ size = 16, title }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden={!title}>
    {title && <title>{title}</title>}
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);
