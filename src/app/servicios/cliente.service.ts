import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private db:AngularFirestore) { }

  getClientes(cedula){
    return this.db.collection("Cliente", ci=>ci.where('cedula','==',cedula)).snapshotChanges();
  }

}
