import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Game } from 'src/app/_models/game.model';
import { GamesService } from 'src/app/_services/games.service';

@Component({
  selector: 'app-game',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss'],
})
export class JoinComponent implements OnInit {
  game!: Game;

  constructor(private gameService: GamesService, private router: Router) {}

  ngOnInit(): void {
    this.game = this.gameService.currentGame();
    console.log(JSON.stringify(this.game));
  }
  joinTeam(name: string) {
    const id = this.router.url.replace("/games/join/", "")
    this.gameService.joinGame(name, id);
  }
}
