import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessOperationPage } from './success-operation.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessOperationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessOperationPageRoutingModule {}
