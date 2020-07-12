import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCdlaPageRoutingModule } from './modal-cdla-routing.module';

import { ModalCdlaPage } from './modal-cdla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCdlaPageRoutingModule
  ],
  declarations: [ModalCdlaPage]
})
export class ModalCdlaPageModule {}
