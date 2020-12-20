import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewVotePageRoutingModule } from './view-vote-routing.module';

import { ViewVotePage } from './view-vote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewVotePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ViewVotePage]
})
export class ViewVotePageModule {}
