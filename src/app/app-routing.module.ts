import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './_components/game/game.component';
import { CreateGameComponent } from './_pages/create-game/create-game.component';
import { HomeComponent } from './_pages/home/home.component';

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
    path: 'games/:id',
    component: GameComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
