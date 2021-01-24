import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from '../api-pokemon.service';
@Component({
  selector: 'app-pokemon-to-discovery',
  templateUrl: './pokemon-to-discovery.component.html',
  styleUrls: ['./pokemon-to-discovery.component.css'],
  providers: [ApiPokemonService]
})
export class PokemonToDiscoveryComponent implements OnInit {
  loading: boolean = false;
  constructor(public apiService: ApiPokemonService) { }

  ngOnInit(): void {
  }

  randomPokemon() {
    this.apiService.showPokemon = true;
    let randomNumber: number = Math.floor(Math.random() * this.apiService.defaultOption);
    setTimeout(() => {
      this.apiService.loading=true;
      this.apiService.getPokemon(randomNumber.toString()).subscribe(
        (data) => {

          this.apiService.showPokemon = false;
          this.apiService.loading=false;
          this.apiService.pokemonSelected = data;

        }
      )
    }, 3000
    )
  }
}
