import { Component } from '@angular/core';
import {FaveChangedEventArgs} from "./favorite/favorite.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{

  title: string = "test";

  //for favorite component example
  post =
  {
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FaveChangedEventArgs )
  {
    console.log(eventArgs.isValid);
  }

  //for like component example
  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 10
  }

  //for ng switch case example
  public viewMode : string = 'map';

  //for ng for loops example
  coursesData : {id: number, name: string}[] = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
  ];


}

