import { Component, Input, EventEmitter, Output, OnInit} from '@angular/core';

import { Pokemon } from '../shared/models/Pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit  {
  @Input() pokemon: Pokemon = new Pokemon();
  @Output() onReroll: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  ngOnInit() {
    console.log("pokemonrendered")
  }
  reroll() {
    this.onReroll.emit(true);
  }
}
