// import { Component, Input } from '@angular/core';
// import { ModalController } from '@ionic/angular';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-edit-client-modal',
//   templateUrl: './edit-client-modal.component.html',
//   styleUrls: ['./edit-client-modal.component.scss'],
// })
// export class EditClientModalComponent {
//   @Input() clientDetails: any;
//   editedClient: any;

//   constructor(private modalController: ModalController, private http: HttpClient) {
//     // Clonamos el cliente original para no modificar directamente los datos hasta que se guarden los cambios
//     this.editedClient = { ...this.clientDetails };
//   }

//   dismiss() {
//     this.modalController.dismiss();
//   }

//   updateClient() {
//     // Aquí, deberías llamar al servicio PHP para actualizar el cliente con una solicitud GET
//     // Puedes pasar los datos a través de la URL

//     const url = `https://samuelucol.000webhostapp.com/PROYECTO5i/clients/editCLIENT.php?name=${this.editedClient.name}&address=${this.editedClient.address}&email=${this.editedClient.email}`;

//     this.http.get(url).subscribe(
//       (response: any) => {
//         if (response.success) {
//           console.log('Cliente actualizado con éxito');
//           this.dismiss(); // Cierra el modal después de actualizar el cliente
//         } else {
//           console.error('Error al intentar actualizar el cliente');
//           // Maneja el error de actualización según sea necesario
//         }
//       },
//       (error) => {
//         console.error('Error de red al intentar actualizar el cliente', error);
//         // Maneja los errores de red según sea necesario
//       }
//     );
//   }
// }
