import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-product-page',
  templateUrl: './edit-product-page.page.html',
  styleUrls: ['./edit-product-page.page.scss'],
})
export class EditProductPAGEPage {

  constructor(private navCtrl: NavController, private http: HttpClient) { }


}
