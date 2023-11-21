import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientProductListPage } from './client-product-list.page';

const routes: Routes = [
  {
    path: '',
    component: ClientProductListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientProductListPageRoutingModule {}
