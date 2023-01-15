import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../../../models/Pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent  {
  @Input() pokemon!: Pokemon;
  @Output() onReroll!: EventEmitter<boolean>;


  reroll() {
    this.onReroll.emit(true);
  }
}
