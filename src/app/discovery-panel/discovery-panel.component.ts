import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiPokemonService } from '../api-pokemon.service';
@Component({
  selector: 'app-discovery-panel',
  templateUrl: './discovery-panel.component.html',
  styleUrls: ['./discovery-panel.component.css'],
  providers: [ApiPokemonService]
})
export class DiscoveryPanelComponent implements OnInit {
  listFound: any[] = [];
  listWrong: any[] = [];
  display_not_found: boolean;
  keyValid: string;
  constructor(public apiPokemonService: ApiPokemonService) { }

  ngOnInit(): void {
  }
  validPokemon() {
    if (
      this.keyValid === this.apiPokemonService.pokemonSelected.name || 
      this.keyValid === this.apiPokemonService.pokemonSelected.id.toString()) {
        console.log(this.apiPokemonService.pokemonSelected);
        this.listFound.push(this.apiPokemonService.pokemonSelected);
    }
    else {
      this.listWrong.push(this.apiPokemonService.pokemonSelected);
    }
  }

}
