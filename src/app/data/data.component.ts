import { Component } from '@angular/core';
import {Movie} from "../../../Model/movie.module";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

    movies: Movie[] = [
    { id: 1, title: 'Inception', director: 'Christopher Nolan', releaseYear: 2010, genre: 'Science Fiction' },
    { id: 2, title: 'The Shawshank Redemption', director: 'Frank Darabont', releaseYear: 1994, genre: 'Drama' },
    { id: 3, title: 'Pulp Fiction', director: 'Quentin Tarantino', releaseYear: 1994, genre: 'Crime' },
    { id: 4, title: 'The Dark Knight', director: 'Christopher Nolan', releaseYear: 2008, genre: 'Action' },
    { id: 5, title: 'Forrest Gump', director: 'Robert Zemeckis', releaseYear: 1994, genre: 'Drama' },
    { id: 6, title: 'Spider-Man: Homecoming', director: 'Jon Watts', releaseYear: 2017, genre: 'Action' },
    { id: 7, title: 'Spider-Man: Far From Home', director: 'Jon Watts', releaseYear: 2019, genre: 'Action' },
    { id: 8, title: 'Spider-Man: No Way Home', director: 'Jon Watts', releaseYear: 2021, genre: 'Action' },
    { id: 9, title: 'The Godfather', director: 'Francis Ford Coppola', releaseYear: 1972, genre: 'Crime' },
    { id: 10, title: 'The Godfather: Part II', director: 'Francis Ford Coppola', releaseYear: 1974, genre: 'Crime' },
    { id: 11, title: 'The Matrix', director: 'Lana Wachowski, Lilly Wachowski', releaseYear: 1999, genre: 'Science Fiction' },
    { id: 12, title: 'Titanic', director: 'James Cameron', releaseYear: 1997, genre: 'Romance' },
    { id: 13, title: 'Avatar', director: 'James Cameron', releaseYear: 2009, genre: 'Science Fiction' },
    { id: 14, title: 'The Silence of the Lambs', director: 'Jonathan Demme', releaseYear: 1991, genre: 'Thriller' },
    { id: 15, title: 'The Shawshank Redemption', director: 'Frank Darabont', releaseYear: 1994, genre: 'Drama' },
    { id: 16, title: 'Jurassic Park', director: 'Steven Spielberg', releaseYear: 1993, genre: 'Adventure' },
    { id: 17, title: 'Forrest Gump', director: 'Robert Zemeckis', releaseYear: 1994, genre: 'Drama' },
    { id: 18, title: 'The Lion King', director: 'Roger Allers, Rob Minkoff', releaseYear: 1994, genre: 'Animation' },
    { id: 19, title: 'The Dark Knight Rises', director: 'Christopher Nolan', releaseYear: 2012, genre: 'Action' },
    { id: 20, title: 'Fight Club', director: 'David Fincher', releaseYear: 1999, genre: 'Drama' },
    { id: 21, title: 'The Shawshank Redemption', director: 'Frank Darabont', releaseYear: 1994, genre: 'Drama' },
    { id: 22, title: 'Inception', director: 'Christopher Nolan', releaseYear: 2010, genre: 'Science Fiction' },
    { id: 23, title: 'The Godfather: Part III', director: 'Francis Ford Coppola', releaseYear: 1990, genre: 'Crime' },
    { id: 24, title: 'The Dark Knight', director: 'Christopher Nolan', releaseYear: 2008, genre: 'Action' },
    { id: 25, title: 'The Matrix Reloaded', director: 'Lana Wachowski, Lilly Wachowski', releaseYear: 2003, genre: 'Science Fiction' },
    { id: 26, title: 'The Matrix Revolutions', director: 'Lana Wachowski, Lilly Wachowski', releaseYear: 2003, genre: 'Science Fiction' },
    { id: 27, title: 'Forrest Gump', director: 'Robert Zemeckis', releaseYear: 1994, genre: 'Drama' },
    { id: 28, title: 'The Lord of the Rings: The Fellowship of the Ring', director: 'Peter Jackson', releaseYear: 2001, genre: 'Adventure' },
    { id: 29, title: 'The Lord of the Rings: The Two Towers', director: 'Peter Jackson', releaseYear: 2002, genre: 'Adventure' },
    { id: 30, title: 'The Lord of the Rings: The Return of the King', director: 'Peter Jackson', releaseYear: 2003, genre: 'Adventure' },
  ];

     searchText:String = ""
     showUpdate:boolean = false
     movieID: number =0
     p:number = 1;
     itemsPerPage: number = 10;
     movie ?: Movie[];
     id: number=0;
     title : string = '';
     director: string='';
     releaseYear: number=0;
     genre: String='';





  deleteItem(id: number) {
    this.movies = this.movies.filter((movie)=> movie.id != id)
  }

  showUpdateInfos(id: number) {
    this.movieID = id
    this.showUpdate = true
    this.movie = this.movies.filter(movie => movie.id === id)
    this.id = this.movie[0].id
    this.title = this.movie[0].title;
    this.director = this.movie[0].director;
    this.releaseYear = this.movie[0].releaseYear;
    this.genre = this.movie[0].genre;

  }

  submitForm() {
    const updatedMovie: Movie = {
      id: this.id,
      title: this.title,
      director: this.director,
      releaseYear: this.releaseYear,
      genre: this.genre
    };

    this.movies = this.movies.map(movie => {
      if (movie.id === this.id) {
        return updatedMovie;
      }
      return movie;
    });
    this.showUpdate = false;
  }
}
