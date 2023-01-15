
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from "@angular/common";

import { PokeApiService } from './shared/models/services/poke-api-service.service';

import { AppComponent } from './app.component';
import {PlayfieldComponent} from "./playfield/playfield.component";
import {PokemonComponent} from "./pokemon/pokemon.component";
import {StatbarComponent} from "./statbar/statbar.component";



@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
  ],

  declarations: [
    AppComponent,
    PlayfieldComponent,
    PokemonComponent,
    StatbarComponent
  ],
  providers: [PokeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
