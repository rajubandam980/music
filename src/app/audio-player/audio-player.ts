import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-audio-player',
  imports: [],
  templateUrl: './audio-player.html',
  styleUrl: './audio-player.scss',
})
export class AudioPlayer implements AfterViewInit {

   @ViewChild('audioPlayer')
  audioPlayer!: ElementRef<HTMLAudioElement>;

  constructor(public playerService: PlayerService) {}

  ngAfterViewInit() {
    this.playerService.setAudio(
      this.audioPlayer.nativeElement
    );
  }

  onLoadedMetadata() {
    this.playerService.duration =
      this.audioPlayer.nativeElement.duration;
  }

  onTimeUpdate() {
    this.playerService.currentTime =
      this.audioPlayer.nativeElement.currentTime;
  }

onSongEnded(){

  this.playerService.playNext();

}

  

}
