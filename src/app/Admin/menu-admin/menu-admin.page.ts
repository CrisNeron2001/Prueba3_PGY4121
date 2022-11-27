import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerFireService } from 'src/app/service/serverFire/server-fire.service';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.page.html',
  styleUrls: ['./menu-admin.page.scss'],
})
export class MenuAdminPage implements OnInit {

  constructor
    (
      private adminServer: ServerFireService,
      private router: Router
    ) { }

  ngOnInit() {
  }
  onClick() {
    this.adminServer.logout()
      .then(() => {
        this.router.navigate(['/login-admin']);
      })
      .catch(error => console.log(error));
  }

}
