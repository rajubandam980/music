import { Injectable } from '@angular/core';
import { SONGS } from './data/songs-data';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
currentSong: any = null;

playlist: any[] = [];

currentIndex = 0;

isPlaying = false;

shuffle = false;

repeat = false;

isExpanded = false;

currentTime = 0;

duration = 0;

volume = 1;
songs = SONGS;

audio!: HTMLAudioElement;

  constructor() {}

setAudio(audio: HTMLAudioElement){

  this.audio = audio;

  console.log("✅ Audio connected");


  // Load current song if already selected
  if(this.currentSong){

    console.log(
      "Loading current song:",
      this.currentSong.songUrl
    );


    this.audio.src =
      this.currentSong.songUrl;


    this.audio.load();

  }

}

playSong(song:any, playlist:any[]) {

  this.currentSong = song;

  this.playlist = playlist;


  this.currentIndex =
    playlist.findIndex(
      s => s.id === song.id
    );


  if(!this.audio){
    console.log("Audio not connected");
    return;
  }


  this.audio.pause();


  this.audio.src = song.songUrl;

  this.audio.load();


  this.audio.play()
  .then(()=>{

    this.isPlaying = true;

  })
  .catch(error=>{

    console.log("Play error:", error);

  });

}


async togglePlayPause(){


console.log("Play button clicked");


if(!this.audio){

 console.log("Audio not connected");

 return;

}


console.log(
 "Current source:",
 this.audio.src
);



if(this.audio.paused){


 try{


   await this.audio.play();


   this.isPlaying = true;


 }
 catch(error){

   console.log(
    "Play error:",
    error
   );

 }


}
else{


 this.audio.pause();

 this.isPlaying=false;


}


}

  play(){
    if(!this.audio)
    return;
    this.audio.play()
    .then(()=>{
      this.isPlaying=true;
    });
  }
  pause(){
    if(!this.audio)
    return;
    this.audio.pause();
    this.isPlaying=false;

  }

  playNext(){
    if(this.playlist.length===0)
    return;
    // Shuffle

    if(this.shuffle){
      this.currentIndex =
      Math.floor(
        Math.random() *
        this.playlist.length
      );
    }
    else{
      this.currentIndex++;
    }
    // End of playlist

    if(
      this.currentIndex >=
      this.playlist.length
    ){
      if(this.repeat){
        this.currentIndex=0;
      }
      else{
        this.pause();
        return;
      }
    }
    const nextSong =
    this.playlist[
      this.currentIndex
    ];
    this.playSong(
      nextSong,
      this.playlist
    );
  }

  playPrevious(){
    if(
      this.currentIndex > 0
    ){

      this.currentIndex--;
      const song =
      this.playlist[
        this.currentIndex
      ];
      this.playSong(
        song,
        this.playlist
      );
    }
  }

    toggleShuffle(){

    this.shuffle =
    !this.shuffle;

  }
    toggleRepeat(){

    this.repeat =
    !this.repeat;

  }
    seek(seconds:number){


    if(this.audio){

      this.audio.currentTime =
      seconds;

    }


  }
  changeVolume(value:number){


    this.volume=value;


    if(this.audio){

      this.audio.volume =
      value;

    }


  }

    openFullPlayer(){

    this.isExpanded=true;

  }
    closeFullPlayer(){

    this.isExpanded=false;

  }

loadDefaultSong(song:any, playlist:any[]){

  this.currentSong = song;

  this.playlist = playlist;


  this.currentIndex =
    playlist.findIndex(
      s => s.id === song.id
    );


  if(this.audio){

    console.log("Loading audio:", song.songUrl);

  }

}

initializePlayer(){

  if(this.currentSong){
    return;
  }


  const randomSong =
    this.songs[
      Math.floor(
        Math.random() * this.songs.length
      )
    ];


  this.loadDefaultSong(
    randomSong,
    this.songs
  );

}
  
}