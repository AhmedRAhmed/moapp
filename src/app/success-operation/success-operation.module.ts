import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessOperationPageRoutingModule } from './success-operation-routing.module';

import { SuccessOperationPage } from './success-operation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessOperationPageRoutingModule
  ],
  declarations: [SuccessOperationPage]
})
export class SuccessOperationPageModule {}
