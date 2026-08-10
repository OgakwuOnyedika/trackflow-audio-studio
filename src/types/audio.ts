export type TrackType = 'vocals' | 'drums' | 'bass' | 'synth' | 'guitar' | 'fx';

export interface AudioClip {
  id: string;
  title: string;
  startSeconds: number;
  durationSeconds: number;
  color: string;
}

export interface AudioTrack {
  id: string;
  name: string;
  type: TrackType;
  color: string;
  isMuted: boolean;
  isSolo: boolean;
  volume: number; // 0 to 100
  pan: number; // -50 to 50
  clips: AudioClip[];
}

export interface TransportState {
  isPlaying: boolean;
  currentTime: number;
  bpm: number;
  masterVolume: number;
}
