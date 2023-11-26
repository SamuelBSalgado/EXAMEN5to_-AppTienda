import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ClientsListPage } from '../clients-list/clients-list.page';
import { ProductsListPage } from '../products-list/products-list.page';
// import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  userId: any;



  constructor(private navCtrl: NavController, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.userId = navigation.extras.state['userId'];
    }
  }

  goToClientsList(){
    this.navCtrl.navigateForward('/clients-list', {
      state: {
        userId: this.userId
      }
    });
  }

  goToProductsList(){
    this.navCtrl.navigateForward('/products-list');
  }

}
