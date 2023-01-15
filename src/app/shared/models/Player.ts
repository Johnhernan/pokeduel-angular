import { PlayerStats } from './PlayerStats';
import { Pokemon } from "./Pokemon";

export class Player {
  playerID!: string;
  playerPokemon: Pokemon = {name: "", types: [], sprite: ''};
  playerStats: PlayerStats = {lives: 3, rerolls: 2, wins: 0};
}
