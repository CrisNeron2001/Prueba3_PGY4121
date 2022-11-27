import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { ServerApiService } from 'src/app/service/serverApi/server-api.service';
import { ServerFireService } from 'src/app/service/serverFire/server-fire.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {

  characters: any[] = [];

  constructor
    (
      private charaServer: ServerFireService,
      private apiServer: ServerApiService
    ) { }

  ngOnInit() {
    this.apiServer.getAll()
      .subscribe(res => {
        console.log(res);
        this.characters = res.results;
      },
        (error) => { console.log(error); }
      );
  }
  async onSubmit(id: string) {
    const data = this.characters.filter((element) => element.id === id)[0];
    const response = await this.charaServer.addCharacter({
      id,
      name: data.name,
      gender: data.gender,
      image: data.image,
      species: data.species,
      status: data.status
    });


  }
}