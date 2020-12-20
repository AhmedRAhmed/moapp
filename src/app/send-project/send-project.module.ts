import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendProjectPageRoutingModule } from './send-project-routing.module';

import { SendProjectPage } from './send-project.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendProjectPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SendProjectPage]
})
export class SendProjectPageModule {}
