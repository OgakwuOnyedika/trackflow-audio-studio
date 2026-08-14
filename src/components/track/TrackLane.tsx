import React from 'react';
import { AudioTrack } from '../../types/audio';
import { ClipBlock } from '../timeline/ClipBlock';
import { TrackHeader } from './TrackHeader';

interface TrackLaneProps {
  track: AudioTrack;
  isAudible: boolean;
  onUpdateTrack: (updated: AudioTrack) => void;
}

export const TrackLane: React.FC<TrackLaneProps> = ({
  track,
  isAudible,
  onUpdateTrack,
}) => {
  return (
    <div
      role="row"
      aria-label={`Track lane for ${track.name}`}
      data-testid={`track-lane-${track.id}`}
      style={{
        display: 'flex',
        height: '80px',
        borderBottom: '1px solid var(--tf-border)',
        backgroundColor: isAudible ? 'var(--tf-bg-lane)' : '#0f1422',
      }}
    >
      <TrackHeader track={track} isAudible={isAudible} onUpdateTrack={onUpdateTrack} />

      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        {track.clips.map((clip) => (
          <ClipBlock key={clip.id} clip={clip} isAudible={isAudible} />
        ))}
      </div>
    </div>
  );
};
