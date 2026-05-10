import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { heart, home, list, trashOutline, homeOutline, listOutline, heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class ListsPage {
  listMovies: any[] = [];

  constructor() {
    addIcons({ heart, home, list, trashOutline, homeOutline, listOutline, heartOutline });
  }

  ionViewWillEnter() {
    this.loadList();
  }

  loadList() {
    // Target the 'watchlist' key we created in the last step
    this.listMovies = JSON.parse(localStorage.getItem('watchlist') || '[]');
  }

  removeFromList(movieId: number) {
    this.listMovies = this.listMovies.filter((m: any) => m.id !== movieId);
    localStorage.setItem('watchlist', JSON.stringify(this.listMovies));
  }

  clearAll() {
    this.listMovies = [];
    localStorage.removeItem('watchlist');
  }
}