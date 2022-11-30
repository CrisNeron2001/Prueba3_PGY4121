import { Component, OnInit } from '@angular/core';
import { ServerApiService } from 'src/app/service/serverApi/server-api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.page.html',
  styleUrls: ['./character.page.scss'],
})
export class CharacterPage implements OnInit {

  characters = [];

  constructor
    (
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
}