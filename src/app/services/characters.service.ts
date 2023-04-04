import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {


  baseUrl: string
  
  constructor(private httpClient: HttpClient) {

    this.baseUrl = 'http://localhost:3000/api/characters'
  }


  getAll() {
    return firstValueFrom(
      this.httpClient.get<any[]>(this.baseUrl)
    )
  }

  getCharacterById(characterId: number) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/${characterId}`)
    );
  }
}
