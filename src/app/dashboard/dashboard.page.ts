import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ClientsListPage } from '../clients-list/clients-list.page';
import { ProductsListPage } from '../products-list/products-list.page';
// import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  userId: any;
  logoUrl: any;
  storeName: any;


  constructor(private navCtrl: NavController, private router: Router, private http: HttpClient) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.userId = navigation.extras.state['userId'];
      console.log('Id user recibido entre archivos');
    }
  }


ngOnInit() {

  const id_user = this.userId;
  const url = `https://samuelucol.000webhostapp.com/PROYECTO5i/users/getUserIMG.php?id=${id_user}`;

  this.http.get(url).subscribe(
    (response: any) => {
      console.log(response);
      if (Array.isArray(response) && response.length > 0 && 'logo' in response[0]) {
        this.logoUrl = response[0].logo;
        console.log('Se obtuvo el logo de la tienda:', this.logoUrl);
      } else {
        console.error('No se obtuvo el logo de la tienda');
      }
    },
    (error) => {
      console.error('Error de red al intentar obtener el logo de la tienda', error);
    }
  );

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
