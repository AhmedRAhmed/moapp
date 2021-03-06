import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewComplaintPageRoutingModule } from './view-complaint-routing.module';

import { ViewComplaintPage } from './view-complaint.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewComplaintPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ViewComplaintPage]
})
export class ViewComplaintPageModule {}
