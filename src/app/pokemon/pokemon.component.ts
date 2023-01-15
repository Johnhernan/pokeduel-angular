import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Pokemon } from '../shared/models/Pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent  {
  @Input() pokemon!: Pokemon;
  @Output() onReroll: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  reroll() {
    this.onReroll.emit(true);
  }
}
