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
    zoom: 20
  }); 
  google.maps.event
.addListenerOnce(this.mapRef, 'idle', () => {
  // loaded
  loading.dismiss();
  this.Addmarcador(myLatLng.lat, myLatLng.lng);
  
});
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



}
