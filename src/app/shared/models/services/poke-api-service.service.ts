import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, take } from 'rxjs';
import { HttpClient, } from '@angular/common/http';
import { mergeMap } from 'rxjs/operators'

import { Type } from '../Type';
import { Pokemon } from '../Pokemon';
@Injectable({
  providedIn: 'root'
})

export class PokeApiService {
  private apiHeaders: any;
  private apiUrl : string = "https://pokeapi.co/api/v2/";

  constructor(private _httpClient: HttpClient) { }

  getPokemons() : Observable<Pokemon[]>  {
    const requests =[ this.getPokemon(), this.getPokemon()];
    return forkJoin(requests).pipe(take(1));
  }

  getPokemon(): Observable<Pokemon>{
    const randomId =  Math.floor((Math.random() * 150) + 1);
    return this._httpClient
      .get<Pokemon>(`${this.apiUrl}pokemon/${randomId}`)
      .pipe(
        take(1),
        map( (res: any) =>
         (
          {name: res?.species?.name, sprite: res?.sprites.front_default, types: res?.types} ??
          {name: "", sprite: "", types:[]}
          )
        )
      );
  }

  getTypes(playerTypes: any) {

    // const playersTypes = playerTypes
    //   .map((pTypes: Type[] )=> pTypes ?? null)
    //   .map((t.type: Type) => t.type? ??  null );

   // return forkJoin(playersTypes).pipe(take(1), map(x => {console.log(x); x}));

    // .get<PlayerPokemon>(`${this.apiUrl}type/${randomId}`)
    // .pipe(
    //   take(1),
    //   map( (res:any) =>
    //     (res ? {name: res?.species?.name, types:res?.types}: {name: "", types:[]})
    //   )
    // );

  }

}
