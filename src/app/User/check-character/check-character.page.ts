import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerFireService } from 'src/app/service/serverFire/server-fire.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Character } from 'src/app/interface/chara.interface';

@Component({
  selector: 'app-check-character',
  templateUrl: './check-character.page.html',
  styleUrls: ['./check-character.page.scss'],
})
export class CheckCharacterPage implements OnInit {

  chara: Character;
  characterId: string;
  formChara: FormGroup;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private charaServer: ServerFireService
  ) {
    this.formChara = new FormGroup({
      name: new FormControl(),
      gender: new FormControl(),
      status: new FormControl(),
      species: new FormControl()
    });
  }

  ngOnInit() {
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get<any>('https://rickandmortyapi.com/api/character/' + this.characterId)
      .subscribe(res => this.chara = res);
  }

  onSubmit() {
    console.log(this.formChara.value)
    const response = this.charaServer.createCharacter(this.formChara.value)
      .then(() => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

  }

}
