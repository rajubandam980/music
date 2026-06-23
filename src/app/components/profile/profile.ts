import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {

    user = {
    name: 'Raju Bandam',
    email: 'raju@icloud.com',
    favoriteGenre: 'Telugu Hits'
  };  

}
