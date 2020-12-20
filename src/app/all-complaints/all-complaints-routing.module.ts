import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllComplaintsPage } from './all-complaints.page';

const routes: Routes = [
  {
    path: '',
    component: AllComplaintsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllComplaintsPageRoutingModule {}
