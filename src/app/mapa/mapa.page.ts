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
var componente = document.createElement('img');
this.mapRef.controls[google.maps.ControlPosition.TOP_CENTER].push(this.controlDiv(componente,"up"));
var componente1 = document.createElement('img');
this.mapRef.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(this.controlDiv(componente1,"down"));
var componente2 = document.createElement('img');
this.mapRef.controls[google.maps.ControlPosition.LEFT_CENTER].push(this.controlDiv(componente2,"left"));
var componente3 = document.createElement('img');
this.mapRef.controls[google.maps.ControlPosition.RIGHT_CENTER].push(this.controlDiv(componente3,"right"));

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
    title: 'Hello World!',
    
  });
}

private async ObtenerUbicacion(){
  const rta= await this.geolocation.getCurrentPosition();
  return {
   lat: rta.coords.latitude,
   lng: rta.coords.longitude
 };

}

controlDiv(componente,value){
switch (value) {
  case "up":
    componente.src="https://www.unicef.org.mx/SITAN/wp-content/uploads/2018/10/arrow-icon-clip-art-file-down-arrow-icon-png-balin-icon-arrow-right-32.png";
    componente.style.width="100px";
    componente.style.height="100px";
    componente.style.webkitTransform="rotate(180deg)"
    componente.id="upButton"
    break;
  case "down":
    componente.src="https://www.unicef.org.mx/SITAN/wp-content/uploads/2018/10/arrow-icon-clip-art-file-down-arrow-icon-png-balin-icon-arrow-right-32.png";
    componente.style.width="100px";
    componente.style.height="100px"
    
    componente.id="downButton"

    break;
  case "left":
    componente.src="https://www.unicef.org.mx/SITAN/wp-content/uploads/2018/10/arrow-icon-clip-art-file-down-arrow-icon-png-balin-icon-arrow-right-32.png";
    componente.style.width="100px";
    componente.style.height="100px";
    componente.style.webkitTransform="rotate(90deg)";
    componente.id="leftButton"
    break;
  case "right":
    componente.src="https://www.unicef.org.mx/SITAN/wp-content/uploads/2018/10/arrow-icon-clip-art-file-down-arrow-icon-png-balin-icon-arrow-right-32.png";
    componente.style.width="100px";
    componente.style.height="100px";
    componente.style.webkitTransform="rotate(-90deg)";
    componente.id="rightButton"
    break;

  default:
    break;
}



return componente

}






}
