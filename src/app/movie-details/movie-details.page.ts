import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieService } from '../service/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class MovieDetailsPage implements OnInit {
  movie: any = null;
  cast: any[] = [];
  crew: any[] = [];
  isFavourite: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getMovieDetails(id).subscribe(res => {
        this.movie = res;
        this.checkFavourite();
      });
      this.movieService.getMovieCredits(id).subscribe((res: any) => {
        this.cast = res.cast;
        this.crew = res.crew;
      });
    }
  }

  checkFavourite() {
    const favs = JSON.parse(localStorage.getItem('favourites') || '[]');
    this.isFavourite = favs.some((f: any) => f.id === this.movie.id);
  }

  toggleFavourite() {
    let favs = JSON.parse(localStorage.getItem('favourites') || '[]');
    if (this.isFavourite) {
      favs = favs.filter((f: any) => f.id !== this.movie.id);
    } else {
      favs.push(this.movie);
    }
    localStorage.setItem('favourites', JSON.stringify(favs));
    this.isFavourite = !this.isFavourite;
  }
}