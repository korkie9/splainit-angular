import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Game } from 'src/app/_models/game.model';
import { GameIdAndPassword } from 'src/app/_models/gameIdAndPassword.model';

@Component({
  selector: 'app-game-selection-card',
  templateUrl: './game-selection-card.component.html',
  styleUrls: ['./game-selection-card.component.scss']
})
export class GameSelectionCardComponent implements OnInit {
  selected!: boolean
  @Output() onEnter = new EventEmitter();
  @Input() game!: Game;

  constructor() { }

  ngOnInit(): void {
  }

  select(): void{
    this.selected = true
  }

  enter(): void{
    const idAndPassword: GameIdAndPassword = {
      id: this.game.id,
      password: this.game.password
    }
    this.onEnter.emit(idAndPassword)
  }

}
