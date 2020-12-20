import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendProposalPage } from './send-proposal.page';

const routes: Routes = [
  {
    path: '',
    component: SendProposalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendProposalPageRoutingModule {}
