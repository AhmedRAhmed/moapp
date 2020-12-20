import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendProposalPageRoutingModule } from './send-proposal-routing.module';

import { SendProposalPage } from './send-proposal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendProposalPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SendProposalPage]
})
export class SendProposalPageModule {}
