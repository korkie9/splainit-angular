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
  private currentGame$!: Game;
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
  private words: string[] = [];

  constructor(private http: HttpClient, private router: Router) {}
  // private _url : string = "../../assets/games.json";
  gamesList(): Game[] {
    return this.games;
  }
  addGame(game: Game): void {
    this.games.push(game);
    this.currentGame$ = game;
    this.router.navigate([`games/join/${game.id}`]);
  }
  enterGame(idAndPassword: GameIdAndPassword): boolean {
    let enter: boolean = false;

    for (let game of this.games) {
      if (
        game.id === idAndPassword.id &&
        idAndPassword.password === game.password
      ) {
        enter = true;
        this.currentGame$ = game;
        localStorage.setItem("gameId", game.id)
      }
    }
    if (enter === true) {
      this.router.navigate([`games/join/${idAndPassword.id}`]);
    }
    return enter;
  }
  joinGame(team: string, id: string): void {
    console.log('team: ', team);
    console.log('id: ', id);
    this.router.navigate([`games/add-words/${id}`]);
  }
  currentGame(): Game {
    return this.currentGame$;
  }
  addWord(word: string): void {
    this.words.push(word);
  }
  get getWords(): string[] {
    return this.words;
  }
  deleteWord(word: string): void {
    const index = this.words.indexOf(word);
    if (index > -1) {
      this.words.splice(index, 1);
    }
  }
  startGame(id: string | null): void{
    if(!id){
      alert("It seems you are not registered to play this game")
      this.router.navigate([`games`])
      return
    }
    this.router.navigate([`games/play/${id}`])
  }
}
