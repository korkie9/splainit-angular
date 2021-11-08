import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Game } from '../_models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http: HttpClient){}
  private _url : string = "../../assets/data.json";
  gamesList() :  Observable<Game[]>{
  	return this.http.get<Game[]>(this._url);
  }
}
