import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LoadingController, NumericValueAccessor } from '@ionic/angular';

declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  mapRef = null;
  constructor(private geolocation: Geolocation, private loadingCtrl: LoadingController) { }

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
    zoom: 12
  }); 
  google.maps.event
.addListenerOnce(this.mapRef, 'idle', () => {
  // loaded
  loading.dismiss();
  this.Addmarcador(myLatLng.lat, myLatLng.lng);
  
});
  }

private Addmarcador(lat: number, lng: number){
  const marker = new google.maps.Marker({
    position: {lat,lng},
    zoom: 8,
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
