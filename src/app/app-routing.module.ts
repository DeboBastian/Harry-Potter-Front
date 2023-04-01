import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/movies' },
  { path: 'movies', component: MoviesComponent },
  { path: 'characters', component: CharactersComponent },
  { path: '**', redirectTo:"/movies"}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
