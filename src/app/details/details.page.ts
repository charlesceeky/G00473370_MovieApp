import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieService } from '../service/movie';
import { addIcons } from 'ionicons';
import { heart, heartOutline, home } from 'ionicons/icons';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class DetailsPage implements OnInit {
  person: any = null;
  movies: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    addIcons({ heart, heartOutline, home });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getPersonDetails(id).subscribe(res => {
        this.person = res;
      });
      this.movieService.getPersonMovieCredits(id).subscribe((res: any) => {
        this.movies = res.cast;
      });
    }
  }
}