import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendComplaintPageRoutingModule } from './send-complaint-routing.module';

import { SendComplaintPage } from './send-complaint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendComplaintPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SendComplaintPage]
})
export class SendComplaintPageModule {}
