import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-clients',
  templateUrl: './add-clients.page.html',
  styleUrls: ['./add-clients.page.scss'],
})
export class AddClientsPage {

  newClient: any = {};

  constructor(private http: HttpClient, private router: Router) { }

  addClient() {
    const queryString = `id_user=${encodeURIComponent(this.newClient.id_user)}&name=${encodeURIComponent(this.newClient.name)}&address=${encodeURIComponent(this.newClient.address)}&email=${encodeURIComponent(this.newClient.email)}&phone=${encodeURIComponent(this.newClient.phone)}&photo=${encodeURIComponent(this.newClient.photo)}&paymentDate=${encodeURIComponent(this.newClient.paymentDate)}&day=${encodeURIComponent(this.newClient.day)}&hour=${encodeURIComponent(this.newClient.hour)}`;
    const url = `https://samuelucol.000webhostapp.com/PROYECTO5i/clients/addCLIENT.php?${queryString}`;

    this.http.get(url).subscribe(
      (response: any) => {
        if (response.success) {
          console.log('Nuevo cliente agregado con éxito');
          this.router.navigate(['/clients-list']);
        } else {
          console.error('Error al agregar un nuevo cliente');
        }
      },
      (error) => {
        console.error('Error de red al intentar agregar un nuevo cliente', error);
      }
    );
  }
}
