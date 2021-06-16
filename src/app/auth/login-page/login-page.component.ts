import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username = '';
  pass = '';


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(){
    // console.log(this.username, this.pass);
    const body = {
      phoneNumber : this.username,
      password: this.pass
    }
    this.http.post('https://myshopdev.azurewebsites.net/api/auth/login', body)
    .subscribe(data =>  this.successLogin(data),
               error => this.failedLogin(error)
    );
  }
  successLogin(data: Object): void {
    window.alert('Login Successful');
    console.log(data);
  }

  failedLogin(error: HttpErrorResponse): void {
    if (error.status === 401){
      window.alert('Username and Password do not match');
    }
  }

}
