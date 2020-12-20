import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewVotePage } from './view-vote.page';

const routes: Routes = [
  {
    path: '',
    component: ViewVotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewVotePageRoutingModule {}
