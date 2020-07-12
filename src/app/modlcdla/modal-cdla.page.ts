import { Component, OnInit } from '@angular/core';
import {ClienteService} from '../servicios/cliente.service'
import { AuthService } from '../servicios/auth.service';


interface classCliente{
  id:string,
  apellido:string,
  nombre:string,
  cedula:string,
  correo:string,
  direcciones:{
    barrio:string,
    direccion:string,
    estado:string,
    fecha:string,
    latitud:number,
    longitud:number,
    referencia:string
  },
  idContrato: string,
  productos:{
    estado:string,
    nombreProducto:string,
    valor:number
  },
  telefonoCasa:string,
  telefonoCelular:string,
}

@Component({
  selector: 'app-modal-cdla',
  templateUrl: './modal-cdla.page.html',
  styleUrls: ['./modal-cdla.page.scss'],
})



export class ModalCdlaPage implements OnInit {
  cedu : string;
  public listCliente: any=[];

  constructor(public cliente: ClienteService, public authservice: AuthService) { }

  verificaCedula(){
    this.cliente.getClientes(this.cedu).subscribe(cli=>{
      cli.map(cli=>{

        const data: classCliente=cli.payload.doc.data() as classCliente;

        this.listCliente.push(data);
        console.log(this.listCliente);

      })
    })
  }
  activarBotonesG(){
    document.getElementById('upButton').style.display="block";
    document.getElementById('downButton').style.display="block";
    document.getElementById('leftButton').style.display="block";
    document.getElementById('rightButton').style.display="block";
  }

  
  ngOnInit() {
  }

}
