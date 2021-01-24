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
  listLog: any[] = [];
  display_not_found: boolean;
  keyValid: string;
  failCount=0;
  constructor(public apiPokemonService: ApiPokemonService) { }

  ngOnInit(): void {
  }

  validPokemon() {
    this.display_not_found = false;
    let type;
    if (
      this.keyValid === this.apiPokemonService.pokemonSelected.name || 
      this.keyValid === this.apiPokemonService.pokemonSelected.id.toString()) {
        console.log(this.apiPokemonService.pokemonSelected);
        this.listFound.push(this.apiPokemonService.pokemonSelected);
        this.randomPokemon();
        type = 1;

    }
    else {
      this.failCount++;
      this.display_not_found = true;
      this.listWrong.push(this.apiPokemonService.pokemonSelected);
      type = 0;
      if (this.failCount ===3) {
        this.randomPokemon();
      }
    }
    this.listLog.push({
      'answer':this.keyValid,
      'type':type
    })
    this.keyValid ='';
  }



  randomPokemon() {
    this.apiPokemonService.showPokemon = true;
    let randomNumber: number = Math.floor(Math.random() * this.apiPokemonService.defaultOption);
    setTimeout(() => {
      this.apiPokemonService.loading=true;
      this.apiPokemonService.getPokemon(randomNumber.toString()).subscribe(
        (data) => {

          this.apiPokemonService.showPokemon = false;
          this.apiPokemonService.loading=false;
          this.apiPokemonService.pokemonSelected = data;

        }
      )
    }, 3000
    )
  }

}
