import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from 'src/app/interface/chara.interface';


@Injectable({
  providedIn: 'root'
})
export class ServerApiService {

  url = 'https://rickandmortyapi.com/api/character';

  constructor
    (
      private http: HttpClient
    ) { }

  getAll() {
    return this.http.get<any>(this.url);
  }

  public getById(id: string) {
    return this.http.get<Character>(`${this.url}/${id}`);
  }


}