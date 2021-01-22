import { Component, OnInit } from '@angular/core';
import {ApiPokemonService} from '../api-pokemon.service';
@Component({
  selector: 'app-pokemon-to-discovery',
  templateUrl: './pokemon-to-discovery.component.html',
  styleUrls: ['./pokemon-to-discovery.component.css'],
  providers: [ApiPokemonService]
})
export class PokemonToDiscoveryComponent implements OnInit {

  constructor(public apiService: ApiPokemonService) { }

  ngOnInit(): void {
  }

 
}
