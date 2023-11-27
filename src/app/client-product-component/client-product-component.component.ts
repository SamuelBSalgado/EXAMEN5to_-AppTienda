import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ClientProductComponentModule } from './client-product-component.module';

@Component({
  selector: 'app-client-product-component',
  templateUrl: './client-product-component.component.html',
  styleUrls: ['./client-product-component.component.scss'],
})
export class ClientProductComponentComponent {
  ventas: any[] = [];
  @Input() productDetails: any;


  clientId: any; //Para ingresar a quien le quiero vender
  quantityToSell: any;; //Para ingresar cuánto quiero vender

  constructor(private modalController: ModalController, private http: HttpClient) {
    
  }

  // Método para cerrar el modal
  dismiss() {
    this.modalController.dismiss();
  }

  // Método para confirmar la venta
  confirmSale() {
    //AQUÍ DEBO HACER QUE SE AGREGUE AL ARRAY
    this.ventas.push({
      clientId: this.clientId,
      productId: this.productDetails.id,
      quantity: this.quantityToSell,
      price: this.quantityToSell * this.productDetails.sellPrice
    });
    console.log(this.ventas);

    const id_client = this.clientId;
    const id_product = this.productDetails.id;
    const name_product = this.productDetails.name;
    const description = this.productDetails.description;
    const quantity = this.quantityToSell;
    const cost = this.productDetails.sellPrice * quantity;
    const url = `https://samuelucol.000webhostapp.com/PROYECTO5i/ventas/addVenta.php?id_client=${id_client}&id_product=${id_product}&name_product=${name_product}&description=${description}&quantity=${quantity}&cost=${cost}`;

    this.http.get(url).subscribe(
      (response: any) => {
        if (response.success) {
          console.log('Venta generada con éxito');
        } else {
          console.log('Error al efectuar la venta');
        }
      },
      (error) => {
        console.error('Error de red para efectuar la venta', error);
      }
    );

  }
}
