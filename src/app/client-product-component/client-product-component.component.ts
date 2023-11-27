// client-product-component.component.ts

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

  // Variable para almacenar el ID del cliente
  clientId: number = 0;
  productId: number = 0;
  quantityToSell: number = 0;

  constructor(private modalController: ModalController, private http: HttpClient) {}

  // Método para cerrar el modal
  dismiss() {
    this.modalController.dismiss();
  }

  // Método para confirmar la venta
  confirmSale() {
    //AQUÍ DEBO HACER QUE SE AGREGUE AL ARRAY QUE SE ALOJE EN EL BOTÓN VENTAS
    this.ventas.push({
      clientId: this.clientId,
      productId: this.productId,
      quantity: this.quantityToSell,
    });

    console.log(this.ventas);

    this.dismiss();
    // // Lógica para enviar la información de la venta al servidor usando una solicitud GET
    // const url = `URL_DEL_SERVICIO_PARA_CONFIRMAR_VENTA?productId=${this.productDetails.id}&clientId=${this.clientId}`;

    // this.http.get(url).subscribe(
    //   (response: any) => {
    //     if (response.success) {
    //       console.log('Venta confirmada con éxito');
    //       // Puedes agregar más lógica aquí según tus necesidades
    //       this.dismiss();
    //     } else {
    //       console.error('Error al confirmar la venta');
    //     }
    //   },
    //   (error) => {
    //     console.error('Error de red al intentar confirmar la venta', error);
    //   }
    // );
  }
}
