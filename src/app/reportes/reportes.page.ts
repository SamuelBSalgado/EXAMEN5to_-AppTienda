import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit{
  tickets: any[] = [];
  userId: any;

  

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      const navigationExtras = this.router.getCurrentNavigation()?.extras;
      if (navigationExtras && navigationExtras.state) {
        this.userId = navigationExtras.state['userId'];
      }
    });
    console.log('PAGE reportes');
  }


  ngOnInit() {
    console.log(this.userId);
    const id_user = this.userId;
    const url = `https://samuelucol.000webhostapp.com/PROYECTO5i/ventas/listVenta.php?id_user=${id_user}`;

    this.http.get(url).subscribe(
      (response: any) => {
        if (response.success) {
          this.tickets = response.ventas;
          console.log('Mostrando listado de tickets');
        } else {
          console.error('No se pudieron listar los tickets');
        }
      },
      (error) => {
        console.error('Error de red al listar los tickets', error);
      }
    );
    
  }
  


}
