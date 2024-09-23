import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  username: string = 'Usuario';

  constructor(private toastController: ToastController) { }

  ngOnInit() {
    this.mostrarBienvenida(); // Muestra la bienvenida cuando se inicializa la página
  }

  // Método para mostrar la notificación de bienvenida
  async mostrarBienvenida() {
    const toast = await this.toastController.create({
      message: `¡Bienvenido, ${this.username}!`,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
