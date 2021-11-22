import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './_pages/game/game.component';
import { CreateGameComponent } from './_pages/create-game/create-game.component';
import { HomeComponent } from './_pages/home/home.component';
import { LoginComponent } from './_pages/login/login.component';
import { SignupComponent } from './_pages/signup/signup.component';
import { JoinComponent } from './_pages/join/join.component';
import { AddWordsComponent } from './_pages/add-words/add-words.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'games',
    pathMatch: 'full'
  },
  {
    path: 'games',
    component: HomeComponent,
  },
  {
    path: 'games/create-game',
    component: CreateGameComponent
  },
  {
    path: 'games/join/:id',
    component: JoinComponent
  },
  {
    path: 'games/add-words/:id',
    component: AddWordsComponent
  },
  {
    path: 'games/play/:id',
    component: GameComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
