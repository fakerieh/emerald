import { RomData } from './types';

export const MOCK_ROMS: RomData[] = [
  {
    id: '1',
    name: 'LineageOS',
    version: '23.2',
    androidVersion: 'Android 16',
    deviceSupport: ['POCO M6 Pro 4G', 'Redmi Note 13 Pro 4G'],
    description: 'LineageOS 23.2 based on Android 16 QPR2. This is an unofficial build. Vanilla only (no GApps included). Experience the latest features with enhanced performance and privacy.',
    downloadUrl: 'https://drive.google.com/drive/folders/1goHBWKkhfqksRmJ5dhtpmQwAxQPHStR5',
    imageUrl: 'https://picsum.photos/800/400?random=1',
    developer: {
      name: 'itssmeexaveroo',
      avatarUrl: 'https://picsum.photos/100/100?random=101'
    },
    releaseDate: '2026-02-13',
    tags: ['Unofficial', 'Vanilla', 'QPR2']
  }
];

export const ANDROID_VERSIONS = ['Android 16', 'Android 15', 'Android 14', 'Android 13', 'Android 12'];