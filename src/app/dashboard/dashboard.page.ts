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
    this.navCtrl.navigateForward('/products-list', {
      state: {
        userId: this.userId
      }
    });
  }

  async openProductsToSell() {
    this.navCtrl.navigateForward('/vender', {
      state: {
        userId: this.userId
      }
    });
    // const clientId = await this.clientDetails.id;
    // this.router.navigate(['/client-product-list', { id: clientId, userId: this.userId }]);
    // this.router.navigate(['/client-product-list', { id: this.clientDetails.id }]);
    // this.dismiss();
  }

  openReports() {
    this.navCtrl.navigateForward('/reportes', {
      state: {
        userId: this.userId
      }
    });
  }

}
