import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/_models/game.model';
import { GamesService } from 'src/app/_services/games.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game!: Game
  constructor(private gameService: GamesService) { }

  ngOnInit(): void {
    this.game = this.gameService.currentGame()
    console.log(JSON.stringify(this.game))
  }
  joinTeam(name: string){
    console.log(name)
  }


}
