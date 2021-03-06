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
import { GameComponent } from './_pages/game/game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateGameComponent } from './_pages/create-game/create-game.component';
import { LayoutComponent } from './_layouts/layout/layout.component';
import { LoginComponent } from './_pages/login/login.component';
import { SignupComponent } from './_pages/signup/signup.component';
import { WaitScreenComponent } from './_components/wait-screen/wait-screen.component';
import { JoinComponent } from './_pages/join/join.component';
import { AddWordsComponent } from './_pages/add-words/add-words.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameSelectionCardComponent,
    GameComponent,
    CreateGameComponent,
    LayoutComponent,
    LoginComponent,
    SignupComponent,
    WaitScreenComponent,
    JoinComponent,
    AddWordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
