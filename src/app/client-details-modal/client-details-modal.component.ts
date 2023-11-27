import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// import { EditClientModalComponent } from '../edit-client-modal/edit-client-modal.component';



@Component({
  selector: 'app-client-details-modal',
  templateUrl: './client-details-modal.component.html',
  styleUrls: ['./client-details-modal.component.scss'],
})
export class ClientDetailsModalComponent implements OnInit {
  @Input() clientDetails: any;
  @Input() userId: any;

  constructor(private modalController: ModalController, private http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const navigationExtras = this.router.getCurrentNavigation()?.extras;
      if (navigationExtras && navigationExtras.state) {
        this.userId = navigationExtras.state['userId'];
      }
    });
  }

  ngOnInit() {
    console.log('Id del usuario mostrandose en modal: ', this.userId);
  }

  dismiss(){
    this.modalController.dismiss({
      userId: this.userId,
    });
  }

  async deleteClient() {
    // Aquí, deberías llamar al servicio PHP para eliminar el cliente
    const clientId = await this.clientDetails.id;
    const url = `https://samuelucol.000webhostapp.com/PROYECTO5i/clients/deleteCLIENT.php?id=${clientId}`;
  
    // Llama al servicio para eliminar el cliente
    await this.http.get(url).subscribe(
      (response: any) => {
        if (response.success) {
          console.log('Cliente eliminado con éxito');
          this.dismiss();
        } else {
          console.error('Error al eliminar el cliente');
        }
      },
      (error) => {
        console.error('Error de red al intentar eliminar el cliente', error);
      }
    );
  }

  async openEditClient() {
    console.log('Editar usuario');
  }

  // async openProductsToClient() {
  //   const clientId = await this.clientDetails.id;
  //   this.router.navigate(['/client-product-list', { id: clientId, userId: this.userId }]);
  //   // this.router.navigate(['/client-product-list', { id: this.clientDetails.id }]);
  //   this.dismiss();
  // }
  

  // async openProductsToClient(clientId: number, userId: any){
  //   // const clientId = await this.clientDetails.id;
  //   this.router.navigate(['/client-product-list', {id: clientId}]);
  //   console.log(userId);
  //   this.dismiss();
  // }

  // async editClient() {
  //   const editModal = await this.modalController.create({
  //     component: EditClientModalComponent,
  //     componentProps: {
  //       clientDetails: this.clientDetails,
  //     },
  //   });

  //   return await editModal.present();
  // }

  dismissAndNavigate() {
    // Cierra el modal y navega automáticamente hacia atrás
    this.modalController.dismiss().then(() => {
      this.router.navigate(['/clients-list']);
    });
  }
  
}
