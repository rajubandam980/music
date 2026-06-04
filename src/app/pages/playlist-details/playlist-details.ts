import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-playlist-details',
  imports: [CommonModule],
  templateUrl: './playlist-details.html',
  styleUrl: './playlist-details.scss',
})
export class PlaylistDetails {

   playlistName = 'Telugu Hits';

     songs = [
    {
      title: 'Naatu Naatu',
      artist: 'Rahul Sipligunj'
    },
    {
      title: 'Butta Bomma',
      artist: 'Armaan Malik'
    },
    {
      title: 'Samajavaragamana',
      artist: 'Sid Sriram'
    }
  ];

    playSong(song: any): void {
    console.log('Playing:', song.title);
  }

}
