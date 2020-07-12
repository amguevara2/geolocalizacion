import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  correo: string;
  pass: string;
  islogged: boolean;
  
  constructor(private router: Router,private auth:AuthService) {
  
    
   }

    ingresar(){
      this.auth.login(this.user,this.pass).then(res=>{
        this.router.navigate(['./menu'])
      }).catch(err=>console.log("error"));
    }



   ngOnInit() {
   
  } 
  
}
