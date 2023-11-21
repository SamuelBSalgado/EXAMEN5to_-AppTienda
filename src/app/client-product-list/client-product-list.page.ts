import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
// import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-client-product-list',
  templateUrl: './client-product-list.page.html',
  styleUrls: ['./client-product-list.page.scss'],
})
export class ClientProductListPage {
  products: any[] = [];
  clientId: number;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.clientId = this.route.snapshot.params['id'];
  }

  ionViewWillEnter() {
    this.clientId = this.route.snapshot.params['id'];
    this.loadProducts();
  }

  loadProducts(){
    const url = 'https://samuelucol.000webhostapp.com/PROYECTO5i/products/listPRODUCT.php';

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

}

/*
const clientId = await this.clientDetails.id;

    await this.http.get('https://samuelucol.000webhostapp.com/PROYECTO5i/products/listPRODUCT.php').subscribe(
      (response: any) => {
        if (response.success) {
          console.log('Mostrando productos para vender a un cliente');
        } else {
          console.error('Error de red al intentar mostrar los productos para vender a un cliente');
        }
      },
      (error) => {
        console.error('Error de red al intentar cargar los productos para vender al cliente', error);
      }
    );
*/