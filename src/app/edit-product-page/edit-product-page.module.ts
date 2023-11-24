import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditProductPAGEPageRoutingModule } from './edit-product-page-routing.module';

import { EditProductPAGEPage } from './edit-product-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditProductPAGEPageRoutingModule
  ],
  declarations: [EditProductPAGEPage]
})
export class EditProductPAGEPageModule {}
