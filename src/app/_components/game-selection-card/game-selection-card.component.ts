import { Component, Input, OnInit } from '@angular/core';

import { Game } from 'src/app/_models/game.model';
import { GameIdAndPassword } from 'src/app/_models/gameIdAndPassword.model';
import { GamesService } from 'src/app/_services/games.service';

@Component({
  selector: 'app-game-selection-card',
  templateUrl: './game-selection-card.component.html',
  styleUrls: ['./game-selection-card.component.scss']
})
export class GameSelectionCardComponent implements OnInit {
  selected!: boolean
  password!: string
  @Input() game!: Game;
  errorMessage!: string;

  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
  }

  select(): void{
    this.selected = true
  }
  setPassword(password: string){
    this.password = password
  }

  onEnter(): void{
    const idAndPassword: GameIdAndPassword = {
      id: this.game.id,
      password: this.password
    }
    const entered = this.gameService.enterGame(idAndPassword)
    if(entered === false) this.errorMessage = 'Password Incorrect'
  }

}
