import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.page.html',
  styleUrls: ['./edit-product-page.page.scss'],
})
export class EditProductPAGEPage {
  productDetails: any;
  name: string = ''; //PUEDE QUE EL ERROR ESTÉ AQUÍ. DEBO DECLARAR BIEN LOS DETALLES DE PRODUCTDETAILS EL CUAL SEGUN YO SÍ SE RECIBE
  description: string= '';
  quantity: number = 0;
  sellPrice: number = 0;
  costPrice: number = 0;
  img: string = '';
  // @Input() productId: any;
  // @Input() name: any;
  // @Input() description: any;
  // @Input() quantity: any;
  // @Input() sellPrice: any;
  // @Input() costPrice: any;
  // @Input() img: any;

  constructor(private navCtrl: NavController, private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.productDetails = navigation.extras.state['productDetails'];
    }
    // this.route.queryParams.subscribe(params => {
    //   if (this.router.getCurrentNavigation().extras.state) {
    //     this.productDetails = this.router.getCurrentNavigation().extras.state['productDetails'];
    //   }
    // });
    // this.productDetails = this.navCtrl.getPrevious().data.productDetails;
  }

  async confirmEdit(){
    const productId = await this.productDetails.id;
    const name = await this.productDetails.name;
    const description = await this.productDetails.description;
    const quantity = await this.productDetails.quantity;
    const sellPrice = await this.productDetails.sellPrice;
    const costPrice = await this.productDetails.costPrice;
    const img = await this.productDetails.img;

    const id_client = 0; //id que se pone manualmente de acuerdo al cliente al que se le quiera vender.
    // const name = encodeURIComponent(this.name);
    // const description = encodeURIComponent(this.description);
    // const quantity = encodeURIComponent(this.quantity.toString());
    // const sellPrice = encodeURIComponent(this.sellPrice.toString());
    // const costPrice = encodeURIComponent(this.costPrice.toString());
    // const img = encodeURIComponent(this.img);

    // const productId = await this.productDetails.id;
    /* CAMBIAR EL PHP DE EDIT PARA RECIBIR EL ID_CLIENT Y HACER EL WHERE */
    const url = `https://samuelucol.000webhostapp.com/PROYECTO5i/products/editPRODUCT.php?productId=${productId}?name=${name}?description=${description}?quantity=${quantity}?sellPrice=${sellPrice}?costPrice=${costPrice}?img=${img}`

    try {
      const response = await this.http.get(url).toPromise();
      const responseString = response as string;
      const responseJSON = JSON.parse(responseString);

      if (responseJSON.success) {
        console.log('Edición de datos realizada con éxito');
      } else {
        console.error('Error al editar los datos del producto:', responseJSON.error);
      }
    } catch (error) {
      console.error('Error de red al intentar editar los datos del producto', error);
    }    

    // await this.http.get(url).subscribe(
    //   (response: any) => {
    //     if (response.success) {
    //       console.log('Edición de datos realizada con éxito');
    //     } else {
    //       console.error('Error al editar los datos del producto');
    //     }
    //   },
    //   (error) => {
    //     console.error('Error de red al intentar editar los datos del producto', error);
    //   }
    // );
  }
}
