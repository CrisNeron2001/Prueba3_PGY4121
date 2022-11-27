import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerFireService } from 'src/app/service/serverFire/server-fire.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {

  logAdmin: FormGroup;

  constructor
    (
      public fb: FormBuilder,
      private adminServer: ServerFireService,
      private router: Router
    ) {
    this.logAdmin = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]]
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    this.adminServer.login(this.logAdmin.value)
      .then
      (
        response => {
          console.log(response);
          this.adminServer.getAdmin();
          this.router.navigate(['/menu-admin']);
        }
      )
      .catch(error => console.log(error));
  }

  onClick() {
    this.adminServer.loginWithGoogle()
      .then(response => {
        console.log(response);
        this.router.navigate(['/menu-admin']);
      })
      .catch(error => console.log(error));
  }

}
