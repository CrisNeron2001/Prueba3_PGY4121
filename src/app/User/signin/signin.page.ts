import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerFireService } from 'src/app/service/serverFire/server-fire.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  signForm: FormGroup;

  constructor
    (
      public fb: FormBuilder,
      private userServer: ServerFireService,
      private router: Router
    ) {
    this.signForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.maxLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    {
      const response = this.userServer.createUser(this.signForm.value)
        .then
        (
          response => {
            console.log(response);
            let user = this.signForm.value;
            this.userServer.createUser(user);
            this.router.navigate(['/login']);
          }
        )
        .catch(error => console.log(error));
    }

  }
}