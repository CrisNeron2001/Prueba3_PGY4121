import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerApiService } from 'src/app/service/serverApi/server-api.service';
import { ServerFireService } from 'src/app/service/serverFire/server-fire.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  characters = [];

  constructor
    (
      private apiServer: ServerApiService,
      private userServer: ServerFireService,
      private router: Router
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

  onClick() {
    const res = this.userServer.logout()
      .then(() => {
        console.log(res)
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }

}
