import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerFireService } from 'src/app/service/serverFire/server-fire.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  logUser: FormGroup;

  constructor
    (
      public fb: FormBuilder,
      private userServer: ServerFireService,
      private router: Router
    ) {
    this.logUser = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.userServer.login(this.logUser.value)
      .then(
        response => {
          console.log(response);
          this.router.navigate(['/menu']);
        })
      .catch(error => console.log(error));
  }

  onClick() {
    this.userServer.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/menu']);
      })
      .catch(error => console.log(error));
  }

}