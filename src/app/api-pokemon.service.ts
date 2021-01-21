import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiPokemonService {
  url: string = "https://pokeapi.co/api/v2/pokemon/";
  private _pokemonSelected;
  @Output() pokemonSelectedChanged: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {
    ApiPokemonService.instance = ApiPokemonService.instance || this;
    return ApiPokemonService.instance;
  }
 
  static instance: ApiPokemonService;
  public getPokemon(value: string):Observable<any> {
    
    return this.http.get(this.url + value);
  }

  public get pokemonSelected() {
    return this._pokemonSelected;
  }

  public set pokemonSelected(value:any) {
    this._pokemonSelected = value;
    setTimeout(() => {
        this.pokemonSelectedChanged.emit(true);
      }
    ,0)
  }

}
