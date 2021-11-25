import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GamesService } from 'src/app/_services/games.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  started!: boolean;
  paused!: boolean;
  playerWhosTurnItIs!: string;
  playerTurn!: boolean;
  startGameTime!: boolean;
  time: number = 30;
  intervalId!: any;
  timeoutId!: any;
  nextButton = false;
  points = 0;
  ended!: boolean;
  words!: string[];
  currentWord!: string;
  currentWordNumber!: number;
  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.started = true;
    this.playerTurn = true;
    this.playerWhosTurnItIs = 'Greg';
    this.startGameTime = false;
    this.ended = false
    this.words = this.gamesService.remainingWords()
    this.currentWordNumber = 0
    this.currentWord = this.words[this.currentWordNumber]
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
    this.paused = false
  }
  stopTime(): void {
    this.paused = true;
    if(this.intervalId) clearInterval(this.intervalId);
    if(this.timeoutId) clearTimeout(this.timeoutId);
  }
  next(): void {
    this.playerTurn = false
    this.startGameTime = false
  }
  addPoint(): void{
    if(this.currentWordNumber === this.words.length - 1){
      this.points += 1
      this.ended = true
      return
    }
    this.currentWordNumber += 1
    this.currentWord = this.words[this.currentWordNumber]
    this.points += 1
  }
  endRound(): void{
    this.ended = true
    this.stopTime()
    
  }
}
