import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
})
export class ProductModalComponent {
  @Input() productDetails: any;

  constructor(private modalController: ModalController, private http: HttpClient, private navCtrl: NavController) {}

  dismiss(){
    this.modalController.dismiss();
  }

  async openEditProductPAGE(){
    this.navCtrl.navigateForward(['/edit-product-page'], {
      state: { 
        productDetails: await this.productDetails
      }
    });
    this.dismiss();
  }


  async deleteProduct(){
    const productId = await this.productDetails.id;
    const url = `https://samuelucol.000webhostapp.com/PROYECTO5i/products/deletePRODUCT.php?id=${productId}`;

    await this.http.get(url).subscribe(
      (response: any) => {
        if (response.success) {
          console.log('Producto eliminado con éxito');
          this.dismiss();
        } else {
          console.error('Error al eliminar el producto');
        }
      },
      (error) => {
        console.error('Error de red al intentar eliminar el producto', error);
      }
    );
  }

}
