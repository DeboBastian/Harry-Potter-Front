import { Component } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {


  characters: any[]
  character: {}
  
  constructor(private charactersService: CharactersService) {
    this.characters = []
    this.character = {}
  }

  async ngOnInit() {

    try {
      const response = await this.charactersService.getAll()
      this.characters = response
    } catch (error) {
      console.log(error)
    }

  }

}
