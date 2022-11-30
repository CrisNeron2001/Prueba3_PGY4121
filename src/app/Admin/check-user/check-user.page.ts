import { Component, OnInit } from '@angular/core';
import { ServerFireService } from 'src/app/service/serverFire/server-fire.service';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-check-user',
  templateUrl: './check-user.page.html',
  styleUrls: ['./check-user.page.scss'],
})
export class CheckUserPage implements OnInit {

  user: User[];

  constructor(
    private adminServer: ServerFireService
  ) {
    this.user = [{
      uid: '',
      password: '',
      email: '',
    }];
  }

  ngOnInit() {
    this.adminServer.getUser().subscribe(user => {
      this.user = user;
    });
  }

  onClick(user: User) {
    const res = this.adminServer.deleteUser(user);
    console.log(res);
  }

}
