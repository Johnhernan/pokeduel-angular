import { PlayerStats } from './../models/PlayerStats';
import { PlayerPokemon } from './../models/PlayerPokemon';
import { Component, OnInit} from '@angular/core';
import { PokeApiService } from '../models/services/poke-api-service.service';

@Component({
  selector: 'app-playfield',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.css']
})
export class PlayfieldComponent implements OnInit {
  title = 'pokeduel-angular';
  isGameStarted: boolean = false;
  playerStats: PlayerStats[] = [];
  playerPokemons: PlayerPokemon[] = [];

  constructor(private _pokeApiService: PokeApiService) {

  }

  ngOnInit() {


  }

  getPokemons() {
    this._pokeApiService
      .getPokemon()
      .subscribe((res: PlayerPokemon) => this.playerPokemons.push(res));

    this._pokeApiService
      .getPokemon()
      .subscribe((res: PlayerPokemon) => this.playerPokemons.push(res));
  }

  battle() {
    const pokemonTypes = this.playerPokemons.map((pokemon: PlayerPokemon) => pokemon.types);

    this._pokeApiService.getTypes(pokemonTypes).subscribe()
  }
}
