import { MoviesService } from './../../services/movies.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {


  movies: any[]

  constructor(private moviesService: MoviesService) {
    this.movies = []
  }

  async ngOnInit() {

    try {
      const response = await this.moviesService.getAll()
      this.movies = response
    } catch (error) {
      console.log(error)
    }

  }

}
