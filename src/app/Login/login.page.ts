import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  correo: string;
  pass: string;
  correo1: string="al@hotmail.com";
  pass1: string="123456789";
  islogged: boolean;
  
  constructor(private router: Router) {
  
    
   }

    ingresar(){

      if(this.correo==this.correo1 && this.pass==this.pass1){
      console.log("Perfecto");
      this.router.navigate(['./menu'])
      }
      else{
      console.log("Incorrecto");
      }
    }



   ngOnInit() {
   
  } 
  
}
