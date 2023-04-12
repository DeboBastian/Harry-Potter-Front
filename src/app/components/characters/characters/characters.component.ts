import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {


  characters: any[]
 character: any
  
  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute) {
    this.characters = []
    this.character
  }

  async ngOnInit() {

    try {
      this.characters = await this.charactersService.getAll()
    } catch (error) {
      console.log(error)
    }

  }

  
  }
