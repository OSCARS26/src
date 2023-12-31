import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';
import { RegistroComponent } from 'src/app/components/registro/registro.component';



@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,

    RegistroPageRoutingModule
  ],
  declarations: [
    RegistroPage, 
    RegistroComponent,
  ]

})
export class RegistroPageModule { }
