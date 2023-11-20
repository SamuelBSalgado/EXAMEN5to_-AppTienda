import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
//IMPORTAR AQUÍ EL MODULO DE SELECCIÓN DE PRODUCTOS

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
})
export class ProductsListPage {
  products: any[] = [];

  constructor(private http: HttpClient, private modalController: ModalController) { }
  
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
}
