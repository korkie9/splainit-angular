import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
import { Validators } from '@angular/forms';

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
  constructor(private fb: FormBuilder) {}

  get gameName(): AbstractControl | null {
    return this.createGameForm.get('gameName');
  }
  get wordsPerPlayer(): AbstractControl | null {
    return this.createGameForm.get('wordsPerPlayer');
  }
  get teamNameField(): AbstractControl | null {
    return this.teamNamesForm.get('teamNameField');
  }

  ngOnInit(): void {
    this.createGameForm = this.fb.group(
      {
        gameName: [
          '',
          [
            Validators.minLength(2),
            Validators.required,
            Validators.maxLength(25),
          ],
        ],
        wordsPerPlayer: [
          1,
          [
            Validators.maxLength(3),
            Validators.required,
            Validators.minLength(1),
          ],
        ],
      },
      { Validator: this.wordsPerPlayerIsLargerThanZero }
    );
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

  wordsPerPlayerIsLargerThanZero(g: FormControl) {
    const wpp = g.get('wordsPerPlayer');
    return wpp?.value > 0
      ? null
      : this.createGameForm.setErrors({ wordsPerPlayerIsLargerThanZero: true });
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
    const name = this.gameName?.value;
    const num = this.wordsPerPlayer?.value;
    const teams = this.teamNames;
    console.log(JSON.stringify({ name: name, wpp: num, teams: teams }));
  }
}
