import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SongService } from '../../services/song';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './songs.html',
  styleUrl: './songs.scss',
})
export class Songs implements OnInit {

  songs: any[] = [];
  selectedSong: any = null;

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.loadSongs();
  }

  loadSongs(): void {

    console.log('Loading songs...');

    this.songService.getAllSongs().subscribe({
      next: (data: any) => {

        console.log('Songs API response:', data);

        // 🔥 IMPORTANT: new reference (avoids Angular update issues)
        this.songs = [...data];

      },
      error: (err: any) => {
        console.error(err);
      }
    });

  }

  playSong(song: any): void {

    this.selectedSong = song;

    console.log('Playing song:', song);

  }

}