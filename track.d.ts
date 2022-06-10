type track = {
  title: string | null;
  artist: string | null;
  albumName: string | null;
  albumArtist: string | null;
  duration: string | null;
  uri: string;
  artwork: string | null;
};

export declare namespace MusicMetadataWrapper {}

declare const getMetadata: (uris: string[]) => Promise<track[]>;