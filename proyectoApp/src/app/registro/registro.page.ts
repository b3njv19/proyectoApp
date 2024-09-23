import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  constructor(private navCtrl: NavController) {
    console.log('RegistroPage cargado'); // Para verificar si se carga el componente
  }

  registrar() {
    console.log('Registrar usuario'); // Mensaje para confirmar el clic

    // Redirigir a la página de inicio después del registro
    this.navCtrl.navigateForward('/home');
  }
}

