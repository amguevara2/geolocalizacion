import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCdlaPage } from './modal-cdla.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCdlaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCdlaPageRoutingModule {}
