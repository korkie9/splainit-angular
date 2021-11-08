import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './_modules/material/material.module';
import { HomeComponent } from './_pages/home/home.component';
import { GameSelectionCardComponent } from './_components/game-selection-card/game-selection-card.component';
import { HttpClientModule } from '@angular/common/http';
import { GamesService } from './_services/games.service';
import { GameComponent } from './_components/game/game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateGameComponent } from './_pages/create-game/create-game.component';
import { LayoutComponent } from './_layouts/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameSelectionCardComponent,
    GameComponent,
    CreateGameComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
