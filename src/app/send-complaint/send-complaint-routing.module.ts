import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendComplaintPage } from './send-complaint.page';

const routes: Routes = [
  {
    path: '',
    component: SendComplaintPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendComplaintPageRoutingModule {}
