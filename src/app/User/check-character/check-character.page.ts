import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/interface/chara.interface';
import { ServerFireService } from 'src/app/service/serverFire/server-fire.service';
import { HttpClient } from '@angular/common/http';
import { threadId } from 'worker_threads';
import { ServerApiService } from 'src/app/service/serverApi/server-api.service';

@Component({
  selector: 'app-check-character',
  templateUrl: './check-character.page.html',
  styleUrls: ['./check-character.page.scss'],
})
export class CheckCharacterPage implements OnInit {

  chara: any;
  characterId: string;

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.characterId = this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get('https://rickandmortyapi.com/api/character/' + this.characterId)
      .subscribe(res => this.chara = res);
  }



}
