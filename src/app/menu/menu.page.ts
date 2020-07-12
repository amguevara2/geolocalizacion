import { Component, OnInit } from '@angular/core';
import {AuthService} from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router: Router,public authServices: AuthService) { }

  ngOnInit() {
  }

  OnLogout(){
    this.authServices.OnLogout();
  }

  Rmenu(){
    this.router.navigate(['/mapa'])
  }
  

  
}
