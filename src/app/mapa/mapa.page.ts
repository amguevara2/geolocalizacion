import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController, NumericValueAccessor } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalCdlaPage } from '../modlcdla/modal-cdla.page';


declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  mapRef = null;
  constructor(private geolocation: Geolocation, private loadingCtrl: LoadingController, private modal:ModalController) { }


  ngOnInit() {
    this.loadMap();
  }

  async loadMap(){

    

    
    const loading = await this.loadingCtrl.create();
    loading.present();
    const myLatLng= await this.ObtenerUbicacion();
    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
    center: myLatLng,
    disableDefaultUI: true,
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
    zoom: 20
  }); 
  google.maps.event
.addListenerOnce(this.mapRef, 'idle', () => {
  // loaded
  loading.dismiss();
  this.Addmarcador(myLatLng.lat, myLatLng.lng);
  
});

var componente = document.createElement('div');

this.mapRef.controls[google.maps.ControlPosition.TOP_CENTER].push(this.controlDiv(componente,"down","padding-top"));
this.mapRef.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(this.controlDiv(componente,"up","padding-up"));
this.mapRef.controls[google.maps.ControlPosition.LEFT_CENTER].push(this.controlDiv(componente,"left","padding-left"));
this.mapRef.controls[google.maps.ControlPosition.RIGHT_CENTER].push(this.controlDiv(componente,"right","padding-right"));
  }

async cedula()
{
const myModal =await this.modal.create({
  component: ModalCdlaPage
 
});
  return await myModal.present();
}


private Addmarcador(lat: number, lng: number){
  const marker = new google.maps.Marker({
    position: {lat,lng},
    zoom: 20,
    map: this.mapRef  ,
    draggable: true, 
    title: 'Hello World!'
  });
}

private async ObtenerUbicacion(){
  const rta= await this.geolocation.getCurrentPosition();
  return {
   lat: rta.coords.latitude,
   lng: rta.coords.longitude
 };

}

controlDiv(div,value,possicion){




switch (value) {
  case "up":
    div.id="upMap";
    div.style.borderBottom="30px solid #0A0A0A";
    div.style.borderLeft="30px solid transparent";
    div.style.borderRight="30px solid transparent";
    break;
  case "down":
    div.id="downMap";
    div.style.borderTop="30px solid #0A0A0A";
    div.style.borderLeft="30px solid transparent";
    div.style.borderRight="30px solid transparent";
    break;
  case "left":
    div.id="leftMap";
    div.style.borderBottom="30px solid transparent";
    div.style.borderTop="30px solid transparent";
    div.style.borderRight="30px solid #0A0A0A";
    break;
  case "right":
    div.id="rightMap";
    div.style.borderBottom="30px solid transparent";
    div.style.borderTop="30px solid transparent";
    div.style.borderLeft="30px solid #0A0A0A";
    break;

  default:
    break;
}

div.style.fontSize="0px";
div.style.lineHeight="0px";
div.style[possicion] = '30px';


return div

}






}
