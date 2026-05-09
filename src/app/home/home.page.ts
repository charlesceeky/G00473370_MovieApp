import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { heart, chevronBack, chevronForward } from 'ionicons/icons';
import { MovieService } from '../service/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    RouterModule,
    IonicModule 
  ]
})
export class HomePage implements OnInit {
  movies: any[] = [];
  searchTerm: string = '';
  studentNumber: string = 'G00473370';

  @ViewChild('slider', { read: ElementRef }) slider!: ElementRef; 

  constructor(private movieService: MovieService) {
    addIcons({ heart, chevronBack, chevronForward }); 
  }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.getTrendingMovies().subscribe((res: any) => {
      this.movies = res.results;
    });
  }

  onSearchChange(event: any) {
    this.searchTerm = event.detail.value;
    if (this.searchTerm === '') {
      this.loadMovies();
    } else {
      this.movieService.searchMovies(this.searchTerm).subscribe((res: any) => {
        this.movies = res.results;
      });
    }
  }

  scrollLeft() {
    if (this.slider?.nativeElement) {
      this.slider.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    }
  }

  scrollRight() {
    if (this.slider?.nativeElement) {
      this.slider.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    }
  }
}