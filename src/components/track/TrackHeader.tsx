import React from 'react';
import { AudioTrack } from '../../types/audio';
import { TrackBadge } from '../common/Badge';
import { LevelMeter } from '../common/LevelMeter';
import { MuteSoloButtons } from './MuteSoloButtons';
import { PanSlider } from './PanSlider';
import { VolumeFader } from './VolumeFader';

interface TrackHeaderProps {
  track: AudioTrack;
  isAudible: boolean;
  onUpdateTrack: (updated: AudioTrack) => void;
}

export const TrackHeader: React.FC<TrackHeaderProps> = ({
  track,
  isAudible,
  onUpdateTrack,
}) => {
  const handleToggleMute = () => {
    onUpdateTrack({ ...track, isMuted: !track.isMuted });
  };

  const handleToggleSolo = () => {
    onUpdateTrack({ ...track, isSolo: !track.isSolo });
  };

  // Bug in baseline: Adjusting volume or pan accidentally resets isMuted to false
  const handleVolumeChange = (newVolume: number) => {
    onUpdateTrack({ ...track, volume: newVolume, isMuted: false });
  };

  const handlePanChange = (newPan: number) => {
    onUpdateTrack({ ...track, pan: newPan, isMuted: false });
  };

  return (
    <div
      role="region"
      aria-label={`Track header ${track.name}`}
      data-testid={`track-header-${track.id}`}
      style={{
        width: '280px',
        backgroundColor: 'var(--tf-bg-surface)',
        borderRight: '1px solid var(--tf-border)',
        padding: '10px 14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexShrink: 0,
        borderLeft: `4px solid ${track.color}`,
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontWeight: 700, fontSize: '0.8125rem' }}>{track.name}</span>
          <TrackBadge type={track.type} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <MuteSoloButtons
            isMuted={track.isMuted}
            isSolo={track.isSolo}
            trackName={track.name}
            onToggleMute={handleToggleMute}
            onToggleSolo={handleToggleSolo}
          />
          <PanSlider pan={track.pan} trackName={track.name} onChange={handlePanChange} />
        </div>

        <VolumeFader volume={track.volume} trackName={track.name} onChange={handleVolumeChange} />
      </div>

      <LevelMeter level={track.volume} isAudible={isAudible} />
    </div>
  );
};
