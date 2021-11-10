import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Game } from 'src/app/_models/game.model';
import { GamesService } from 'src/app/_services/games.service';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss'],
})
export class CreateGameComponent implements OnInit {
  createGameForm!: FormGroup;
  teamNamesForm!: FormGroup;
  teamNames!: string[];
  createError!: string;
  gameNameError!: string;
  constructor(private fb: FormBuilder, private gameService: GamesService) {}

  get gameName(): AbstractControl | null {
    return this.createGameForm.get('gameName');
  }
  get wordsPerPlayer(): AbstractControl | null {
    return this.createGameForm.get('wordsPerPlayer');
  }
  get teamNameField(): AbstractControl | null {
    return this.teamNamesForm.get('teamNameField');
  }
  get password(): AbstractControl | null {
    return this.createGameForm.get('password');
  }

  ngOnInit(): void {
    this.createGameForm = new FormGroup({
      gameName: new FormControl('', [
        Validators.required,
        Validators.maxLength(25),
        Validators.minLength(2),
      ]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.required,
        Validators.maxLength(25),
      ]),
      wordsPerPlayer: new FormControl(1, [
        Validators.maxLength(3),
        Validators.required,
        Validators.minLength(1),
        this.wordsPerPlayerIsLargerThanZero()
      ]),
    });
    this.teamNamesForm = this.fb.group({
      teamNameField: [
        '',
        [
          Validators.minLength(2),
          Validators.required,
          Validators.maxLength(25),
        ],
      ],
    });
  }

  // wordsPerPlayerIsLargerThanZero(g: FormControl) {
  //   const wpp = g.get('wordsPerPlayer');
  //   return wpp?.value > 0
  //     ? null
  //     : this.createGameForm.setErrors({ wordsPerPlayerIsLargerThanZero: true });
  // }
  wordsPerPlayerIsLargerThanZero(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const wpp = control.get('wordsPerPlayer');
      return wpp?.value > 0 ? { wordsPerPlayerIsLargerThanZero: true } : null;
    };
  }
  teamExists = (t: string): boolean => {
    if (!this.teamNames) return false;
    for (let team of this.teamNames) {
      if (team === t) return true;
    }
    return false;
  };
  addTeam(): void {
    if (!this.teamNames) {
      if (this.createError) this.createError = '';
      this.teamNames = [this.teamNameField?.value.trim()];
      this.teamNamesForm.reset();
      return;
    }
    if (this.teamExists(this.teamNameField?.value)) {
      this.createError = 'This name already exists';
      return;
    }
    this.createError = '';
    this.teamNames.push(this.teamNameField?.value.trim());
    this.teamNamesForm.reset();
    console.log(JSON.stringify(this.teamNames));
  }
  removeName(team: string) {
    if (this.teamExists(team)) {
      if (this.teamNames.length < 2) {
        this.createError = 'Please add at least 2 teams';
      }
      this.teamNames = this.teamNames.filter((t) => t != team);
    }
  }
  createGame(): void {
    if (!this.teamNames || this.teamNames.length < 2) {
      this.createError = 'Please add at least 2 teams';
      return;
    }
    const game: Game = {
      id: (this.gameService.gamesList().length + 1).toLocaleString(),
      name: this.gameName?.value,
      creator: 'korkie',
      teamNames: this.teamNames,
      noWordsPerPlayer: this.wordsPerPlayer?.value,
      password: this.password?.value,
    };
    this.gameService.addGame(game);
    console.log(JSON.stringify(game));
  }
}
