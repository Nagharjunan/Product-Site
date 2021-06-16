import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  username = '';
  pass = '';
  confPass = '';

  constructor() { }

  ngOnInit(): void {
  }

  signup(){

  }

}
