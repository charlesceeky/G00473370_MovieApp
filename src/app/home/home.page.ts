import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieService } from '../service/movie'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
})
export class HomePage implements OnInit {
  movies: any[] = [];
  searchTerm: string = '';
  studentNumber: string = 'G00473370'; 

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadTrending();
  }

  loadTrending() {
    this.movieService.getTrendingMovies().subscribe((res: any) => {
      this.movies = res.results;
    });
  }

  onSearchChange(event: any) {
    this.searchTerm = event.detail.value;
    if (this.searchTerm.trim() === '') {
      this.loadTrending();
    } else {
      this.movieService.searchMovies(this.searchTerm).subscribe((res: any) => {
        this.movies = res.results;
      });
    }
  }
}