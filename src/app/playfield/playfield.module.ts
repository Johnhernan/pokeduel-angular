import { StatbarComponent } from './components/statbar/statbar.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayfieldComponent } from './playfield.component';

@NgModule({
  declarations: [
    PlayfieldComponent,
    PokemonComponent,
    StatbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlayfieldComponent
  ]

})
export class PlayfieldModule { }
