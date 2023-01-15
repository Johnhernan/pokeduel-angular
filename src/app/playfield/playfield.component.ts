import { Component, OnInit} from '@angular/core';

import { PokeApiService } from '../shared/models/services/poke-api-service.service';
import { PlayerStats } from '../shared/models/PlayerStats';
import { Pokemon } from '../shared/models/Pokemon';
import { Player } from '../shared/models/Player';

@Component({
  selector: 'app-playfield',
  templateUrl: './playfield.component.html',
  styleUrls: ['./playfield.component.css']
})
export class PlayfieldComponent implements OnInit {
  private isGameStarted: boolean = false;
  players: Player[] = [new Player(), new Player()];

  constructor(private _pokeApiService: PokeApiService) {}

  ngOnInit() {
    this.players.forEach((player:Player, index:number) => {
      this.players[index].playerID = `player${index+1}`;
    })
  }

  getPokemons() {
    this._pokeApiService.getPokemons().subscribe(res => {
      res.forEach((pokemon: any, index: number)=> {
        this.players[index].playerPokemon = pokemon;
      });
    })
    console.log("playfield rendered")

  }

  reroll(){

  }

  battle() : void {
    //const pokemonTypes = this.playerPokemons.map((pokemon: Pokemon) => pokemon?.types);
    //this._pokeApiService.getTypes(pokemonTypes).subscribe()
  }

  // compareWeakness(player1Types, player2Types) : number[] {

  //   return []
  // }
}
