import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ClientsListPage } from '../clients-list/clients-list.page';
import { ProductsListPage } from '../products-list/products-list.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  constructor(private navCtrl: NavController) { }

  goToClientsList(){
    this.navCtrl.navigateForward('/clients-list');
  }

  goToProductsList(){
    this.navCtrl.navigateForward('/products-list');
  }

}
