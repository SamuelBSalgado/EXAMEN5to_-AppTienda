import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private http: HttpClient) {}

  login() {
    const url = 'https://samuelucol.000webhostapp.com/PROYECTO5i/LOGIN/login.php';
    const params = {
      user: this.user,
      password: this.password,
    };

    this.http.get(url, { params }).subscribe(
      (response: any) => {
        if (response.status === 'success') {
          // Autenticación exitosa
          console.log('Exito en autenticación', response.userId);
          this.navCtrl.navigateForward('/dashboard', {
            state: { userId: response.userId },
          });
        } else {
          // Credenciales incorrectas
          console.error('Credenciales incorrectas');
        }
      },
      (error) => {
        console.error('Error en el inicio de sesión', error);
      }
    );
  }
}
