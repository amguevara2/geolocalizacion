import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private router:Router) { }

  login(email:string, password:string){
    return new Promise((resolve,rejects)=>{
      this.AFauth.signInWithEmailAndPassword(email,password).then(res=>{
        resolve(res);
      }).catch(err=>rejects(err));
    });
    
  }
  OnLogout(){
    this.AFauth.signOut().then(res=>this.router.navigate([""])).catch(err=>console.log("Error: "+err));
  }
}
