import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-cdla',
  templateUrl: './modal-cdla.page.html',
  styleUrls: ['./modal-cdla.page.scss'],
})
export class ModalCdlaPage implements OnInit {
  cedu : string;

  constructor() { }

  verificaCedula(){
    console.log(this.cedu);
  }

  ngOnInit() {
  }

}
