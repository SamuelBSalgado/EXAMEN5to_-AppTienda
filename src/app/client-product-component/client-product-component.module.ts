// client-product-component.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ClientProductComponentComponent } from './client-product-component.component';

@NgModule({
  declarations: [ClientProductComponentComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    HttpClientModule,
    // ... otros módulos que puedas necesitar
  ],
})
export class ClientProductComponentModule {}
