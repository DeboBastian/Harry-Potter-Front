import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters/characters.component';
import { MoviesComponent } from './components/movies/movies.component';
import { CharacterComponent } from './components/character/character.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/movies' },
  { path: 'movies', component: MoviesComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: '**', redirectTo: "/movies" },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
