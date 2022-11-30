import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user.interface';
import { ServerFireService } from 'src/app/service/serverFire/server-fire.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: User[];

  constructor
    (
      private userServer: ServerFireService
    ) {
  }

  ngOnInit() {
    this.userServer.getUser().subscribe(user => {
      this.user = user;
    })
  }

}
