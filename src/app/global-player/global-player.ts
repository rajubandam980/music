import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-global-player',
  imports: [CommonModule, RouterModule],
  templateUrl: './global-player.html',
  styleUrl: './global-player.scss',
})
export class GlobalPlayer {

  @ViewChild('audioPlayer')
  audioPlayer!: ElementRef<HTMLAudioElement>;

  currentSong: any = null;

  playlist: any[] = [];

  currentIndex = -1;

  isPlaying = false;

  currentTime = 0;

  duration = 0;

  volume = 1;

  playSong(song: any, songs: any[]) {

    this.playlist = songs;

    this.currentSong = song;

    this.currentIndex = songs.indexOf(song);

    const audio = this.audioPlayer.nativeElement;

    audio.src = song.songUrl;

    audio.load();

    audio.play();

    this.isPlaying = true;
  }

  togglePlayPause() {

    const audio = this.audioPlayer.nativeElement;

    if (audio.paused) {

      audio.play();

      this.isPlaying = true;

    } else {

      audio.pause();

      this.isPlaying = false;
    }
  }

  playNext() {

    if (this.currentIndex < this.playlist.length - 1) {

      this.currentIndex++;

      this.playSong(
        this.playlist[this.currentIndex],
        this.playlist
      );
    }
  }

  playPrevious() {

    if (this.currentIndex > 0) {

      this.currentIndex--;

      this.playSong(
        this.playlist[this.currentIndex],
        this.playlist
      );
    }
  }

  updateProgress() {

    const audio = this.audioPlayer.nativeElement;

    this.currentTime = audio.currentTime;
  }

  setDuration() {

    this.duration =
      this.audioPlayer.nativeElement.duration;
  }

  seek(event: Event) {

    const value =
      +(event.target as HTMLInputElement).value;

    this.audioPlayer.nativeElement.currentTime =
      value;
  }

  changeVolume(event: Event) {

    const value =
      +(event.target as HTMLInputElement).value;

    this.volume = value;

    this.audioPlayer.nativeElement.volume = value;
  }

  formatTime(seconds: number): string {

    if (!seconds) return '0:00';

    const mins = Math.floor(seconds / 60);

    const secs = Math.floor(seconds % 60);

    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
}
