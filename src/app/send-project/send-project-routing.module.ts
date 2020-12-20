import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendProjectPage } from './send-project.page';

const routes: Routes = [
  {
    path: '',
    component: SendProjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendProjectPageRoutingModule {}
