import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PokemonService {

  constructor(public http: Http) {
  }

  getRandomPokemon(randomNumber: Number) {
    return this.http.get('http://pokeapi.co/api/v2/pokemon/' + randomNumber).map(res => res.json());
  }

}
