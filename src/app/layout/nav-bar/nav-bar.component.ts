import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  showMenuItem = false;
  display = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeToLogin(){
    this.router.navigate(['login']);
  }

  showMenuItems(){
    this.showMenuItem = !this.showMenuItem;
  }
}
