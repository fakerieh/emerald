import { RomData } from './types';

export const MOCK_ROMS: RomData[] = [
  {
    id: '1',
    name: 'Pixel Experience',
    version: '14.0-20240501',
    androidVersion: 'Android 14',
    deviceSupport: ['POCO M6 Pro 4G', 'Redmi Note 13 Pro 4G'],
    description: 'Pixel Experience is an AOSP based ROM, with Google apps included and all Pixel goodies (launcher, wallpapers, icons, fonts, bootanimation). Our mission is to offer the maximum possible stability and security, along with essential and useful features for the proper functioning of your device.',
    downloadUrl: 'https://download.pixelexperience.org',
    imageUrl: 'https://picsum.photos/800/400?random=1',
    developer: {
      name: 'jhenrique09',
      avatarUrl: 'https://picsum.photos/100/100?random=101'
    },
    releaseDate: '2024-05-01',
    tags: ['Official', 'GApps Included', 'Stable']
  },
  {
    id: '2',
    name: 'LineageOS',
    version: '21.0',
    androidVersion: 'Android 14',
    deviceSupport: ['POCO M6 Pro 4G', 'Redmi Note 13 Pro 4G'],
    description: 'LineageOS is a free and open-source operating system for various devices, based on the Android mobile platform. Experience a cleaner, faster, and more private Android on your POCO or Redmi device.',
    downloadUrl: 'https://download.lineageos.org',
    imageUrl: 'https://picsum.photos/800/400?random=2',
    developer: {
      name: 'LineageOS Team',
      avatarUrl: 'https://picsum.photos/100/100?random=102'
    },
    releaseDate: '2024-04-20',
    tags: ['Official', 'Vanilla', 'Privacy Focused']
  },
  {
    id: '3',
    name: 'Evolution X',
    version: '8.5',
    androidVersion: 'Android 14',
    deviceSupport: ['POCO M6 Pro 4G', 'Redmi Note 13 Pro 4G'],
    description: 'Evolution X brings a pixel feel to your Android device at first glance, with many additional configurations at your disposal. Keep Evolving!',
    downloadUrl: 'https://evolution-x.org',
    imageUrl: 'https://picsum.photos/800/400?random=3',
    developer: {
      name: 'RealAkito',
      avatarUrl: 'https://picsum.photos/100/100?random=103'
    },
    releaseDate: '2024-05-10',
    tags: ['Customization', 'GApps Included', 'Performance']
  },
  {
    id: '4',
    name: 'crDroid',
    version: '10.4',
    androidVersion: 'Android 14',
    deviceSupport: ['POCO M6 Pro 4G', 'Redmi Note 13 Pro 4G'],
    description: 'crDroid is designed to increase performance and reliability over stock Android for your device also attempting to bring many of the best features existent today.',
    downloadUrl: 'https://crdroid.net',
    imageUrl: 'https://picsum.photos/800/400?random=4',
    developer: {
      name: 'crDroid Team',
      avatarUrl: 'https://picsum.photos/100/100?random=104'
    },
    releaseDate: '2024-05-05',
    tags: ['Customization', 'Stable', 'Vanilla']
  },
  {
    id: '5',
    name: 'Paranoid Android',
    version: 'Uvite',
    androidVersion: 'Android 14',
    deviceSupport: ['POCO M6 Pro 4G', 'Redmi Note 13 Pro 4G'],
    description: 'Paranoid Android is a custom ROM aiming to extend the system, working on enhancing the already existing beauty of Android and following the same design philosophies that were set forward by Google.',
    downloadUrl: 'https://paranoidandroid.co',
    imageUrl: 'https://picsum.photos/800/400?random=5',
    developer: {
      name: 'AOSPA',
      avatarUrl: 'https://picsum.photos/100/100?random=105'
    },
    releaseDate: '2024-04-15',
    tags: ['Aesthetic', 'Smooth', 'Beta']
  }
];

export const ANDROID_VERSIONS = ['Android 14', 'Android 13', 'Android 12', 'Android 11'];