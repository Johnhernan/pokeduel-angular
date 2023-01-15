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
  private isGameStarted: boolean = false;
  private playerStats: PlayerStats[] = [];
  private playerPokemons: PlayerPokemon[] = [];

  constructor(private _pokeApiService: PokeApiService) {

  }

  ngOnInit() {
    console.log("here")

  }

  getPokemons() {
    this._pokeApiService
      .getPokemon()
      .subscribe((res: PlayerPokemon) => this.playerPokemons.push(res));

    this._pokeApiService
      .getPokemon()
      .subscribe((res: PlayerPokemon) => this.playerPokemons.push(res));
  }

  battle() : void {
    const pokemonTypes = this.playerPokemons.map((pokemon: PlayerPokemon) => pokemon?.types);
    console.log(pokemonTypes)
    this._pokeApiService.getTypes(pokemonTypes).subscribe()
  }

  // compareWeakness(player1Types, player2Types) : number[] {

  //   return []
  // }
}
