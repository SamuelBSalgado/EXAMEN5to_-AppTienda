import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  user: string = '';
  name: string = '';
  email: string = '';
  storeName: string = '';
  logo: string = '';
  password: string = '';

  constructor(private http: HttpClient, private navCtrl: NavController) {}

  registerUser() {
    const url = 'https://samuelucol.000webhostapp.com/PROYECTO5i/users/addUSER.php';
    const params = {
      user: this.user,
      name: this.name,
      email: this.email,
      storeName: this.storeName,
      logo: this.logo,
      password: this.password,
    };

    this.http.get(url, { params, responseType: 'text' }).subscribe(
      (response) => {
        console.log('Registro exitoso', response);
        //Redirigir al login después del registro exitoso
        this.navCtrl.navigateBack('/home')
      },
      (error) => {
        console.error('Error en el registro', error);
      }
    );
  }
}
