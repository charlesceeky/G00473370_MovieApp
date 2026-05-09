import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'd811caaf66880be1cef71dc93f1f2c57'; 
  private baseUrl = 'https://api.themoviedb.org/3';
  getTrendingMovies() {
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`);
  }

  searchMovies(query: string) {
    return this.http.get(`${this.baseUrl}/search/movie?query=${query}&api_key=${this.apiKey}`);
  }
  getMovieDetails(id: string) {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovieCredits(id: string) {
    return this.http.get(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }

  constructor(private http: HttpClient) { }
  
}