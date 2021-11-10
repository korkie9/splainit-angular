import { Component, OnDestroy, OnInit } from '@angular/core';
import { Game } from 'src/app/_models/game.model';
import { GamesService } from 'src/app/_services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnDestroy {
  constructor(private gamesService: GamesService) {}
  games!: Game[];
  filteredGames!: Game[];
  searchString!: string;

  setSearchString(): void {
    if (!this.searchString) {
      this.filteredGames = this.games;
      return;
    }
    this.filteredGames = this.games.filter((g) =>
      g.name
        .toLowerCase()
        .trim()
        .includes(this.searchString.toLowerCase().trim())
    );
  }
  ngOnInit(): void {
    console.log('initted');
    // this.gamesService.gamesList().subscribe((g) => {
    //   this.games = g;
    //   this.filteredGames = g;
    // });
    this.games = this.gamesService.gamesList()
    this.filteredGames = this.gamesService.gamesList()
  }
  ngOnDestroy(): void {}
}
