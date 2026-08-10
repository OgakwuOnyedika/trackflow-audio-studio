import { AudioTrack } from '../types/audio';

export const INITIAL_TRACKS: AudioTrack[] = [
  {
    id: 'trk-1',
    name: 'Lead Vocals',
    type: 'vocals',
    color: '#ec4899',
    isMuted: false,
    isSolo: false,
    volume: 85,
    pan: 0,
    clips: [
      { id: 'clp-1', title: 'Verse 1 Vox', startSeconds: 2, durationSeconds: 8, color: '#f472b6' },
      { id: 'clp-2', title: 'Chorus Vox Hook', startSeconds: 12, durationSeconds: 8, color: '#f472b6' },
    ],
  },
  {
    id: 'trk-2',
    name: 'Acoustic Drums',
    type: 'drums',
    color: '#f59e0b',
    isMuted: false,
    isSolo: false,
    volume: 90,
    pan: -10,
    clips: [
      { id: 'clp-3', title: 'Main Beat 120BPM', startSeconds: 0, durationSeconds: 16, color: '#fbbf24' },
      { id: 'clp-4', title: 'Drum Fill & Crash', startSeconds: 16, durationSeconds: 6, color: '#fbbf24' },
    ],
  },
  {
    id: 'trk-3',
    name: 'Analog Synth Bass',
    type: 'bass',
    color: '#10b981',
    isMuted: false,
    isSolo: false,
    volume: 80,
    pan: 0,
    clips: [
      { id: 'clp-5', title: 'Sub Bass Groove', startSeconds: 0, durationSeconds: 20, color: '#34d399' },
    ],
  },
  {
    id: 'trk-4',
    name: 'Poly Synth Pad',
    type: 'synth',
    color: '#6366f1',
    isMuted: false,
    isSolo: false,
    volume: 75,
    pan: 25,
    clips: [
      { id: 'clp-6', title: 'Atmosphere Pad Loop', startSeconds: 4, durationSeconds: 16, color: '#818cf8' },
    ],
  },
];
