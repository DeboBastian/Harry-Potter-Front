import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('tokenharry')!
      })
    }
    return firstValueFrom(
      this.httpClient.get<any[]>(this.baseUrl, options)
    )
  }

  
  getCharacterById(id: number) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/${id}`)
    );
  }
}
