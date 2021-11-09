import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Game } from '../_models/game.model';
import { Router } from '@angular/router';
import { GameIdAndPassword } from '../_models/gameIdAndPassword.model';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private games: Game[] = [
    {
      id: 'uhdcjisdnciudsvhiu',
      name: 'The swiss',
      creator: 'amy',
      teamNames: ['t1', 't2', 't3'],
      noWordsPerPlayer: 3,
      password: 'hello',
    },
    {
      id: 'jvjfuyuyfuyfufuyfu',
      name: 'Boardslide',
      creator: 'luke',
      teamNames: ['t1', 't2', 't3'],
      noWordsPerPlayer: 3,
      password: 'hello',
    },
    {
      id: 'uvuuyuyguyguyfuyf',
      name: 'Blue dream',
      creator: 'migs',
      teamNames: ['t1', 't2', 't3'],
      noWordsPerPlayer: 3,
      password: 'hello',
    },
    {
      id: 'oiuytfkjhvjhghj',
      name: 'Uwu',
      creator: 'justin',
      teamNames: ['t1', 't2', 't3'],
      noWordsPerPlayer: 3,
      password: 'hello',
    },
  ];

  constructor(private http: HttpClient, private router: Router) {}
  // private _url : string = "../../assets/games.json";
  gamesList(): Game[] {
    return this.games;
  }
  addGame(game: Game): void {
    this.games.push(game);
    this.router.navigate([`games/${game.id}`]);
  }
  enterGame(idAndPassword: GameIdAndPassword): boolean {
    let enter: boolean = false;
    for(let game of this.games){
      if (
        game.id === idAndPassword.id &&
        idAndPassword.password === game.password
      ) {
        enter = true;
      }
    };
    if(enter === true) this.router.navigate([`games/${idAndPassword.id}`])
    return enter;
  }
}
