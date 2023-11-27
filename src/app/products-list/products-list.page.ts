import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
//IMPORTAR AQUÍ EL MODULO DE SELECCIÓN DE PRODUCTOS
//COMENTARIO DE PRUEBA

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
})
export class ProductsListPage {
  products: any[] = [];
  userId: any;

  constructor(private http: HttpClient, private modalController: ModalController, private navCtrl: NavController, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      const navigationExtras = this.router.getCurrentNavigation()?.extras;
      if (navigationExtras && navigationExtras.state) {
        this.userId = navigationExtras.state['userId'];
      }
    });
  }
  
  ionViewWillEnter() {
    this.loadProducts();
  }

  loadProducts(){
    const id_user = this.userId;
    const url = `https://samuelucol.000webhostapp.com/PROYECTO5i/products/listPRODUCT.php?id_user=${id_user}`;

    this.http.get(url).subscribe(
      (response: any) => {
        this.products = response;
        console.log('Mostrando productos');
        console.log('Id de usuario: ', id_user);
      },
      (error) => {
        console.error('Error al obtener la lista de productos', error);
      }
    );
  }

  openAddProductsPAGE(){
    this.navCtrl.navigateForward('/add-products');
  }

  async openProductsModal(product: any) {
    const modal = await this.modalController.create({
      component: ProductModalComponent,
      componentProps: {
        productDetails: product,
      },
    });

    return await modal.present();
  }
}
