import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'clients-list',
    loadChildren: () => import('./clients-list/clients-list.module').then( m => m.ClientsListPageModule)
  },
  {
    path: 'products-list',
    loadChildren: () => import('./products-list/products-list.module').then( m => m.ProductsListPageModule)
  },
  {
    path: 'vender',
    loadChildren: () => import('./vender/vender.module').then( m => m.VenderPageModule)
  },
  {
    path: 'client-product-list',
    loadChildren: () => import('./client-product-list/client-product-list.module').then( m => m.ClientProductListPageModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./reportes/reportes.module').then( m => m.ReportesPageModule)
  },
  {
    path: 'add-products',
    loadChildren: () => import('./add-products/add-products.module').then( m => m.AddProductsPageModule)
  },
  {
    path: 'edit-product-page',
    loadChildren: () => import('./edit-product-page/edit-product-page.module').then( m => m.EditProductPAGEPageModule)
  },
  {
    path: 'add-clients',
    loadChildren: () => import('./add-clients/add-clients.module').then( m => m.AddClientsPageModule)
  },

  // {
  //   path: 'edit-product',
  //   loadChildren: () => import('./edit-product/edit-product.module').then( m => m.EditProductPageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
