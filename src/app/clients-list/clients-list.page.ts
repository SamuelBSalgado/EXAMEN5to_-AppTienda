import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ClientDetailsModalComponent } from '../client-details-modal/client-details-modal.component';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.page.html',
  styleUrls: ['./clients-list.page.scss'],
})
export class ClientsListPage {
  clients: any[] = [];

  constructor(private http: HttpClient, private modalController: ModalController) { }

  ionViewWillEnter() {
    this.loadClients();
  }

  loadClients(){
    const url = 'https://samuelucol.000webhostapp.com/PROYECTO5i/clients/listCLIENT.php';

    this.http.get(url).subscribe(
      (response: any) => {
        this.clients = response;
        console.log('Sí jala');
      },
      (error) => {
        console.error('Error al obtener la lista de clientes', error);
      }
    );
  }

  async openClientDetailsModal(client: any){
    const modal = await this.modalController.create({
      component: ClientDetailsModalComponent,
      componentProps: {
        clientDetails: client,
      },
    });

    return await modal.present();
  }

}
