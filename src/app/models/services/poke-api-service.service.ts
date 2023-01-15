import { PlayerPokemon } from './../PlayerPokemon';
import { Injectable } from '@angular/core';
import { forkJoin, map, take } from 'rxjs';
import { HttpClient, } from '@angular/common/http';
import { Type } from '../Type';

@Injectable({
  providedIn: 'root'
})

export class PokeApiService {
  private apiHeaders: any;
  private apiUrl : string = "https://pokeapi.co/api/v2/";

  constructor(private _httpClient: HttpClient) { }

  getPokemon()  {
    const randomId = Math.floor(Math.random() * 151);

    return this._httpClient
      .get<PlayerPokemon>(`${this.apiUrl}pokemon/${randomId}`)
      .pipe(
        take(1),
        map( (res:any) =>
          (res ? {name: res?.species?.name, types:res?.types}: {name: "", types:[]})
        )
      );
  }
  getTypes(playerTypes: any) {

    const playersTypes = playerTypes
      .map((pTypes: Type[] )=> pTypes ? pTypes: null)
      .map((type: Type) => type?.url ? type.url: null );

    return forkJoin(playersTypes).pipe(take(1), map(x => {console.log(x); x}));

    // .get<PlayerPokemon>(`${this.apiUrl}type/${randomId}`)
    // .pipe(
    //   take(1),
    //   map( (res:any) =>
    //     (res ? {name: res?.species?.name, types:res?.types}: {name: "", types:[]})
    //   )
    // );

  }

}
