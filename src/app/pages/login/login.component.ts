import { StorageService } from './../../services/storage.service';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authError = false

  messageError = "the error from server, please try again !"

  loading = false;

  loginForm = new FormGroup({
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    password: new UntypedFormControl(null, Validators.required)
  })

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) {}

  signin() {

    this.loading = true

    if(this.loginForm.invalid) {
      console.log("invalid")
      return;
    }

    this.authService.login(this.form.email.value, this.form.password.value).subscribe({
      next: res => {
      
        this.loading = false
        this.authError = false

       
        this.storageService.setToken(res.token)

        this.router.navigate(['/dashboard'])
        this.loginForm.reset()


      },
      error: (err: HttpErrorResponse) => {

        this.authError = true
        this.loading = false

        if(err.status == 400) {
          this.messageError = "Please verify your email or Password !"
        } 

        if(err.status == 404) {
          this.messageError = err.error.message
        } 
      }
    })
  }

  get form() {
    return this.loginForm.controls
  }

}
