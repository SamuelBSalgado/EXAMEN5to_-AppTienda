import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.page.html',
  styleUrls: ['./add-products.page.scss'],
})
export class AddProductsPage {

  newProduct: any = {};

  constructor(private http: HttpClient, private router: Router) {
    console.log('Interfaz de añadir producto');
  }

  addProduct(){
    const queryString = `id_user=${encodeURIComponent(this.newProduct.id_user)}&name=${encodeURIComponent(this.newProduct.name)}&description=${encodeURIComponent(this.newProduct.description)}&quantity=${encodeURIComponent(this.newProduct.quantity)}&sellPrice=${encodeURIComponent(this.newProduct.sellPrice)}&costPrice=${encodeURIComponent(this.newProduct.costPrice)}&img=${encodeURIComponent(this.newProduct.img)}`;
    const url = `https://samuelucol.000webhostapp.com/PROYECTO5i/products/addPRODUCT.php?${queryString}`;

    this.http.get(url).subscribe(
      (response: any) => {
        if (response.success) {
          console.log('Producto añadido con éxito');
          this.router.navigate(['/products-list']);
        } else {
          console.log('Error al cargar el producto');
        }
      },
      (error) => {
        console.error('Error de red al intentar agregar el producto', error);
      }
    );
  }
}
