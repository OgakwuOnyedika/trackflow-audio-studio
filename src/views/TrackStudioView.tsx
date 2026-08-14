import React, { useMemo, useState } from 'react';
import { INITIAL_TRACKS } from '../data/mockProject';
import { useTransportPlayback } from '../hooks/useTransportPlayback';
import { AudioTrack } from '../types/audio';
import { TimelineRuler } from '../components/timeline/TimelineRuler';
import { PlayheadCursor } from '../components/timeline/PlayheadCursor';
import { TrackLane } from '../components/track/TrackLane';
import { TransportBar } from '../components/transport/TransportBar';
import { AddTrackModal } from '../components/track/AddTrackModal';

export const TrackStudioView: React.FC = () => {
  const [tracks, setTracks] = useState<AudioTrack[]>(INITIAL_TRACKS);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const { transport, play, pause, stop } = useTransportPlayback(120);

  const hasAnySolo = useMemo(() => tracks.some((t) => t.isSolo), [tracks]);

  const isTrackAudible = (track: AudioTrack): boolean => {
    if (hasAnySolo) {
      return track.isSolo && !track.isMuted;
    }
    return !track.isMuted;
  };

  const handleUpdateTrack = (updated: AudioTrack) => {
    setTracks((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  };

  const handleAddTrack = (newTrack: AudioTrack) => {
    setTracks((prev) => [...prev, newTrack]);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TransportBar
        isPlaying={transport.isPlaying}
        currentTime={transport.currentTime}
        bpm={transport.bpm}
        onPlay={play}
        onPause={pause}
        onStop={stop}
        onAddTrack={() => setIsAddModalOpen(true)}
      />

      <div style={{ flex: 1, position: 'relative', overflowY: 'auto' }}>
        <TimelineRuler totalSeconds={24} />

        <div style={{ position: 'relative', minWidth: '1000px' }}>
          <PlayheadCursor currentTime={transport.currentTime} />

          {tracks.map((track) => (
            <TrackLane
              key={track.id}
              track={track}
              isAudible={isTrackAudible(track)}
              onUpdateTrack={handleUpdateTrack}
            />
          ))}
        </div>
      </div>

      <AddTrackModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddTrack}
      />
    </div>
  );
};
