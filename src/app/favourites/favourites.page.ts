import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle, 
  IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent 
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { heart, heartOutline, home } from 'ionicons/icons';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    IonHeader, 
    IonToolbar, 
    IonButtons, 
    IonButton, 
    IonIcon, 
    IonTitle, 
    IonContent, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent
  ]
})
export class FavouritesPage {
  favouriteMovies: any[] = [];

  constructor() {
  
    addIcons({ heart, heartOutline, home });
  }

  ionViewWillEnter() {
    this.loadFavourites();
  }

  loadFavourites() {
    this.favouriteMovies = JSON.parse(localStorage.getItem('favourites') || '[]');
  }
}