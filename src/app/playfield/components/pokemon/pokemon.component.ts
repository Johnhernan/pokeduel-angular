import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../../models/Pokemon.model'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent implements OnInit {
  @Input("pokemon") pokemon: Pokemon | undefined ;


  ngOnInit() {
    if(typeof this.pokemon?.pokemonName !== undefined ){console.log("here")}
    console.log(this.pokemon?.pokemonName)
  }

  onBattle() {

  }
}
