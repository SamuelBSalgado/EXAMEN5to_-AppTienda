import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ClientProductComponentComponent } from '../client-product-component/client-product-component.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.page.html',
  styleUrls: ['./vender.page.scss'],
})
export class VenderPage {
  products: any[] = [];
  clientId: number = 0;
  userId: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private modalController: ModalController, private router: Router) {
    this.route.queryParams.subscribe(params => {
      const navigationExtras = this.router.getCurrentNavigation()?.extras;
      if (navigationExtras && navigationExtras.state) {
        this.userId = navigationExtras.state['userId'];
      }
    });
    // this.userId = this.route.snapshot.params['id']; //Este viene de la linea 63 de client-details-modal.component.ts
  }

  ionViewWillEnter() {
    // const params = this.route.snapshot.params;
    // this.clientId = params['id'];
    // this.userId = params['userId'];
    // Obtener el userId del modal);

    this.loadProducts();
  }

  loadProducts(){
    const id_user = this.userId;
    const url = `https://samuelucol.000webhostapp.com/PROYECTO5i/products/listPRODUCT.php?id_user=${id_user}`;

    this.http.get(url).subscribe(
      (response: any) => {
        this.products = response;
        console.log('Mostrando productos para vender al cliente');
      },
      (error) => {
        console.error('Error al obtener la lista de productos', error);
      }
    );
  }

  async openProductDetailsModal(product: any) {
    const modal = await this.modalController.create({
      component: ClientProductComponentComponent,
      componentProps: {
        productDetails: product,
        id_user: this.userId
      },
    });

    return await modal.present();
  }
}


