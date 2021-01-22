import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ApiPokemonService} from './api-pokemon.service';
import { DifficultGameOptionsComponent } from './difficult-game-options/difficult-game-options.component';
import { PokemonToDiscoveryComponent } from './pokemon-to-discovery/pokemon-to-discovery.component';
import { DiscoveryPanelComponent } from './discovery-panel/discovery-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DifficultGameOptionsComponent,
    PokemonToDiscoveryComponent,
    DiscoveryPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiPokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
