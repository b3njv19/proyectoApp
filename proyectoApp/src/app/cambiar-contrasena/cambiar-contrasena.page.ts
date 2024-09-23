import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cambiar-contrasena',
  templateUrl: './cambiar-contrasena.page.html',
  styleUrls: ['./cambiar-contrasena.page.scss'],
})
export class CambiarContrasenaPage {
  nuevaContrasena: string | undefined; // Definición de la propiedad
  confirmarContrasena: string | undefined; // Definición de la propiedad

  constructor(private navCtrl: NavController) {}

  cambiarContrasena() {
    if (this.nuevaContrasena === this.confirmarContrasena) {
      console.log('Contraseña cambiada exitosamente');
      // Aquí puedes agregar la lógica para cambiar la contraseña en tu backend
      this.navCtrl.navigateBack('/home'); // Redirigir a la página de inicio
    } else {
      console.log('Las contraseñas no coinciden');
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  }
}
