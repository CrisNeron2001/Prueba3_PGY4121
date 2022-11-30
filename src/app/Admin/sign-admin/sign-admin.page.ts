import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerFireService } from 'src/app/service/serverFire/server-fire.service';

@Component({
  selector: 'app-sign-admin',
  templateUrl: './sign-admin.page.html',
  styleUrls: ['./sign-admin.page.scss'],
})
export class SignAdminPage implements OnInit {

  aSignForm: FormGroup;

  constructor
    (
      public fb: FormBuilder,
      private adminServer: ServerFireService,
      private router: Router
    ) {
    this.aSignForm = this.fb.group({
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
    this.adminServer.register(this.aSignForm.value.admin)
      .then
      (
        response => {
          console.log(response);
          let admin = this.aSignForm.value;
          this.adminServer.createAdmin(admin);
          this.router.navigate(['/login-admin']);
        }
      )
      .catch(error => console.log(error));
  }


}
