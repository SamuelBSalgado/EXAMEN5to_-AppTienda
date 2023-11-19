import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientsListPageRoutingModule } from './clients-list-routing.module';

import { ClientsListPage } from './clients-list.page';
import { ClientDetailsModalModule } from '../client-details-modal/client-details-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientsListPageRoutingModule,
    ClientDetailsModalModule
  ],
  declarations: [ClientsListPage]
})
export class ClientsListPageModule {}
