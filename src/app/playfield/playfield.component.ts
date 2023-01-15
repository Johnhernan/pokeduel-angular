import { Component, OnInit} from '@angular/core';

import { PokeApiService } from '../shared/models/services/poke-api-service.service';
import { PlayerStats } from '../shared/models/PlayerStats';
import { Pokemon } from '../shared/models/Pokemon';

@Component({
  selector: 'app-playfield',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.css']
})
export class PlayfieldComponent implements OnInit {
  private isGameStarted: boolean = false;
  playerStats: PlayerStats[] = [];
  playerPokemons: Pokemon[] = [{name: "", types:[]}, {name: "", types:[]}];

  constructor(private _pokeApiService: PokeApiService) {

  }

  ngOnInit() {


  }

  getPokemons() {
    this._pokeApiService
      .getPokemon()
      .subscribe((res: Pokemon) => {console.log(res);this.playerPokemons.push(res)});

    // this._pokeApiService
    //   .getPokemon()
    //   .subscribe((res: Pokemon) => this.playerPokemons.push(res));
  }
  reroll(){

  }
  battle() : void {
    const pokemonTypes = this.playerPokemons.map((pokemon: Pokemon) => pokemon?.types);
    this._pokeApiService.getTypes(pokemonTypes).subscribe()
  }

  // compareWeakness(player1Types, player2Types) : number[] {

  //   return []
  // }
}
