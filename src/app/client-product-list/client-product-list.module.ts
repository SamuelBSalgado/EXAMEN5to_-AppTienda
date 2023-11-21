import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientProductListPageRoutingModule } from './client-product-list-routing.module';

import { ClientProductListPage } from './client-product-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientProductListPageRoutingModule
  ],
  declarations: [ClientProductListPage]
})
export class ClientProductListPageModule {}
