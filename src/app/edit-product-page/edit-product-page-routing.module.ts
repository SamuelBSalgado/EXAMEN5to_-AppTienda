import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProductPAGEPage } from './edit-product-page.page';

const routes: Routes = [
  {
    path: '',
    component: EditProductPAGEPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditProductPAGEPageRoutingModule {}
