import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-song-player',
  imports: [],
  templateUrl: './song-player.html',
  styleUrl: './song-player.scss',
})
export class SongPlayer {
  songTitle: string= 'vibe undi';
  songUrl:string = 'http://localhost:8080/api/songs/play/vide.mp3'

  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  playSong(){
    const player =  this.audioPlayer.nativeElement;
    player.style.display='block';
    player.play()
  }

}
