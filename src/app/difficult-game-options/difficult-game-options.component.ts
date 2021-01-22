import { Component, OnInit } from '@angular/core';
import {ApiPokemonService} from '../api-pokemon.service';

@Component({
  selector: 'app-difficult-game-options',
  templateUrl: './difficult-game-options.component.html',
  styleUrls: ['./difficult-game-options.component.css'],
  providers: [ApiPokemonService]
})
export class DifficultGameOptionsComponent implements OnInit {


  constructor(public apiService: ApiPokemonService) { }
  

  ngOnInit(): void {
    this.randomPokemon();
  }


  public changeOption(value: number) {
    this.apiService.defaultOption = undefined;
    setTimeout(() =>{
      this.apiService.defaultOption = value;
      this.randomPokemon()
    },0
    )
    
  }

  
  randomPokemon() {
    let randomNumber: number = Math.floor(Math.random() * this.apiService.defaultOption);
    this.apiService.getPokemon(randomNumber.toString()).subscribe(
      (data) => {
        this.apiService.pokemonSelected = data;
      }
    )
  }

}
