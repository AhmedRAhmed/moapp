import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllComplaintsPageRoutingModule } from './all-complaints-routing.module';

import { AllComplaintsPage } from './all-complaints.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllComplaintsPageRoutingModule
  ],
  declarations: [AllComplaintsPage]
})
export class AllComplaintsPageModule {}
