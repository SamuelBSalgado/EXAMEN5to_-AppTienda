import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.page.html',
  styleUrls: ['./edit-product-page.page.scss'],
})
export class EditProductPAGEPage {
  @Input() productId: any;
  @Input() name: any;
  @Input() description: any;
  @Input() quantity: any;
  @Input() sellPrice: any;
  @Input() costPrice: any;
  @Input() img: any;

  constructor(private navCtrl: NavController, private http: HttpClient) { }

  async confirmEdit(){
    const productId = await this.productId.id;
    const url = `https://samuelucol.000webhostapp.com/PROYECTO5i/products/editPRODUCT.php?productId=${this.productId}?name=${this.name}?description=${this.description}?quantity=${this.quantity}?sellPrice=${this.sellPrice}?costPrice=${this.costPrice}?img=${this.img}`

    await this.http.get(url).subscribe(
      (response: any) => {
        if (response.success) {
          console.log('Edición de datos realizada con éxito');
        } else {
          console.error('Error al editar los datos del producto');
        }
      },
      (error) => {
        console.error('Error de red al intentar editar los datos del producto', error);
      }
    );
  }
}
