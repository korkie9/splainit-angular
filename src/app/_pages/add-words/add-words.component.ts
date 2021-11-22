import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { GamesService } from 'src/app/_services/games.service';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.component.html',
  styleUrls: ['./add-words.component.scss']
})
export class AddWordsComponent implements OnInit {
  addWordForm!: FormGroup;
  words!: string[]
  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.addWordForm = new FormGroup({
      word: new FormControl('', [
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(2),
      ]),
    });
    this.words = this.gamesService.getWords
  }
  get word(): AbstractControl | null {
    return this.addWordForm.get('word');
  }
  addWord(): void{
    this.gamesService.addWord(this.word?.value)
  }
  deleteWord(word: string): void{
    this.gamesService.deleteWord(word)
  }
  start(): void{
    const id = localStorage.getItem("gameId")
    this.gamesService.startGame(id);
  }

}
