import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ClientDetailsModalComponent } from '../client-details-modal/client-details-modal.component';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.page.html',
  styleUrls: ['./clients-list.page.scss'],
})
export class ClientsListPage {
  userId: any;
  clients: any[] = [];

  constructor(private http: HttpClient, private modalController: ModalController, private navCtrl: NavController, private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const navigationExtras = this.router.getCurrentNavigation()?.extras;
      if (navigationExtras && navigationExtras.state) {
        this.userId = navigationExtras.state['userId'];
      }
      // if (this.router.getCurrentNavigation()?.extras.state) {
      //   this.userId = this.router.getCurrentNavigation().extras.state.userId;
      // }
    });
  }

  ionViewWillEnter() {
    this.loadClients();
  }

  loadClients(){
    const id_user = this.userId;
    const url = `https://samuelucol.000webhostapp.com/PROYECTO5i/clients/listCLIENT.php?id_user=${id_user}`;

    this.http.get(url).subscribe(
      (response: any) => {
        this.clients = response;
        console.log('Mostrando clientes');
        console.log('Id de usuario: ', id_user);
      },
      (error) => {
        console.error('Error al obtener la lista de clientes', error);
      }
    );
  }

  OpenaddClientPAGE() {
    this.navCtrl.navigateForward('/add-clients');
  }

  async openClientDetailsModal(client: any, userId: any){
    const modal = await this.modalController.create({
      component: ClientDetailsModalComponent,
      componentProps: {
        clientDetails: client,
        userId: userId,
      },
    });

    return await modal.present();
  }

}
