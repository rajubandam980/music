export interface Song {
  id: number;
  title: string;
  artist: string;
  songUrl: string;
  playlistId?: number;
  imageUrl: string;
}