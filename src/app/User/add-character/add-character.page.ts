import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interface/chara.interface';
import { ServerFireService } from 'src/app/service/serverFire/server-fire.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.page.html',
  styleUrls: ['./add-character.page.scss'],
})
export class AddCharacterPage implements OnInit {

  chara: Character[];

  constructor(private charaServer: ServerFireService) {
    this.chara = [{
      name: '',
      gender: '',
      status: '',
      species: '',
      image: '',
      id: 0
    }]
  }

  ngOnInit() {
    this.charaServer.getCharacter().subscribe(chara => this.chara = chara);
  }

  async onDelete(chara: Character) {
    const response = await this.charaServer.deleteCharacter(chara);
    console.log(response);
  }

}
