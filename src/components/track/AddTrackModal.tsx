import React, { useState } from 'react';
import { AudioTrack, TrackType } from '../../types/audio';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';

interface AddTrackModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (track: AudioTrack) => void;
}

export const AddTrackModal: React.FC<AddTrackModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState<TrackType>('synth');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const colors: Record<TrackType, string> = {
      vocals: '#ec4899',
      drums: '#f59e0b',
      bass: '#10b981',
      synth: '#6366f1',
      guitar: '#38bdf8',
      fx: '#a855f7',
    };

    const newTrack: AudioTrack = {
      id: `trk-${Date.now()}`,
      name: name.trim(),
      type,
      color: colors[type],
      isMuted: false,
      isSolo: false,
      volume: 80,
      pan: 0,
      clips: [],
    };

    onAdd(newTrack);
    setName('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create New Audio Track">
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div>
          <label htmlFor="track-name-input" style={{ display: 'block', fontSize: '0.8125rem', marginBottom: '4px' }}>
            Track Name *
          </label>
          <input
            id="track-name-input"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Rhythm Guitar L"
            style={{ width: '100%', padding: '8px', backgroundColor: '#0b0f19', border: '1px solid #232f48', borderRadius: '4px' }}
          />
        </div>

        <div>
          <label htmlFor="track-type-select" style={{ display: 'block', fontSize: '0.8125rem', marginBottom: '4px' }}>
            Instrument Type
          </label>
          <select
            id="track-type-select"
            value={type}
            onChange={(e) => setType(e.target.value as TrackType)}
            style={{ width: '100%', padding: '8px', backgroundColor: '#0b0f19', border: '1px solid #232f48', borderRadius: '4px' }}
          >
            <option value="vocals">Vocals</option>
            <option value="drums">Drums</option>
            <option value="bass">Bass</option>
            <option value="synth">Synth</option>
            <option value="guitar">Guitar</option>
            <option value="fx">FX / Ambience</option>
          </select>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '10px' }}>
          <Button variant="ghost" onClick={onClose} type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Add Track
          </Button>
        </div>
      </form>
    </Modal>
  );
};
