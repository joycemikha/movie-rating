import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
//  interface movie
// {
//   title: string;
//   backdrop_path:string;
//   poster_path:string;
//   overview:string;
//   vote_average:string;
//   vote_count:string;

// }
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
homeMovies : any ;
imgPath:string ='https://image.tmdb.org/t/p/w500';
constructor(private _movie :MovieService
){

}
ngOnInit() :void{
  this._movie.getPosts().subscribe(
    (res)=>{
      this.homeMovies = res.results
    }
  )
}
}
