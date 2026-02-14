export interface Developer {
  name: string;
  avatarUrl?: string;
  website?: string;
  donationUrl?: string;
}

export interface RomData {
  id: string;
  name: string;
  version: string; // e.g., "14.0"
  androidVersion: string; // e.g., "Android 14"
  deviceSupport: string[]; // List of codenames or device names
  description: string;
  downloadUrl: string;
  imageUrl: string;
  developer: Developer;
  releaseDate: string;
  tags: string[]; // e.g., "Stable", "Official", "GApps Included"
}

export type ThemeMode = 'light' | 'dark' | 'system';

export interface FilterState {
  searchQuery: string;
  androidVersion: string | null;
  device: string | null;
}