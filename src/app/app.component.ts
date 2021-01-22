import { Component } from '@angular/core';
import {ApiPokemonService} from './api-pokemon.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiPokemonService]
})
export class AppComponent {
  constructor(public apiService: ApiPokemonService){}
  title = 'WhoIsThatPokemon';
}
