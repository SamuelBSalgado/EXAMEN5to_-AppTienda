import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ProductModalComponent } from '../product-modal/product-modal.component';
//IMPORTAR AQUÍ EL MODULO DE SELECCIÓN DE PRODUCTOS
//COMENTARIO DE PRUEBA

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
})
export class ProductsListPage {
  products: any[] = [];

  constructor(private http: HttpClient, private modalController: ModalController, private navCtrl: NavController) { }
  
  ionViewWillEnter() {
    this.loadClients();
  }

  loadClients(){
    const url = 'https://samuelucol.000webhostapp.com/PROYECTO5i/products/listPRODUCT.php';

    this.http.get(url).subscribe(
      (response: any) => {
        this.products = response;
        console.log('Mostrando productos');
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
