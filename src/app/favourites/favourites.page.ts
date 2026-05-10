import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { 
  IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle, 
  IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonGrid, IonRow, IonCol // Added Grid components
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { heart, heartOutline, home, homeOutline, list, listOutline, trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonTitle, 
    IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonGrid, IonRow, IonCol // Added Grid components
  ]
})
export class FavouritesPage {
  favouriteMovies: any[] = [];

  constructor() {
    addIcons({ heart, heartOutline, home, trashOutline, list, listOutline, homeOutline});
  }

  ionViewWillEnter() {
    this.loadFavourites();
  }

  loadFavourites() {
    this.favouriteMovies = JSON.parse(localStorage.getItem('favourites') || '[]');
  }

  
  removeFromFavourites(movieId: number) {
    this.favouriteMovies = this.favouriteMovies.filter((m: any) => m.id !== movieId);
    localStorage.setItem('favourites', JSON.stringify(this.favouriteMovies));
  }

  clearAll() {
    this.favouriteMovies = [];
    localStorage.removeItem('favourites');
  }
}