import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  started!: boolean;
  playerWhosTurnItIs!: string;
  playerTurn!: boolean;
  startGameTime!: boolean;
  time: number = 30;
  intervalId!: any;
  timeoutId!: any;
  nextButton = false;
  points = 0;
  ended!: boolean
  constructor() {}

  ngOnInit(): void {
    this.started = true;
    this.playerTurn = true;
    this.playerWhosTurnItIs = 'Greg';
    this.startGameTime = false;
    this.ended = false
  }

  startTime(): void {
    const interval = setInterval(() => {
      this.time = this.time - 1;
      console.log(this.time);
      if (this.time < 1) {
        this.endRound()
        this.nextButton = true;
      }
    }, 1000);
    this.intervalId = interval;
    this.timeoutId = setTimeout(() => {
      clearInterval(this.intervalId);
    }, (this.time + 1) * 1000);
    this.startGameTime = true;
    console.log('started');
  }
  stopTime(): void {
    if(this.intervalId) clearInterval(this.intervalId);
    if(this.timeoutId) clearTimeout(this.timeoutId);
  }
  next(): void {
    this.playerTurn = false
    this.startGameTime = false
  }
  addPoint(): void{
    this.points += 1
  }
  endRound(): void{
    this.stopTime()
    this.ended = true
  }
}
