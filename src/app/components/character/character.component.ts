import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  character: any

  constructor(
    private charactersService: CharactersService,
    private activatedRoute: ActivatedRoute
  ) {
    this.character = {}
  }



  ngOnInit() {
    try {
      this.activatedRoute.params.subscribe(async data => {
        this.character = await this.charactersService.getCharacterById(parseInt(data['id']));
        console.log(data['id']);
      })

    } catch (error) {
      console.log(error)
    }
  }
}