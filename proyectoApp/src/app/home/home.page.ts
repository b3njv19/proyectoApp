import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = ''; // Variable para almacenar el usuario

  constructor(private navCtrl: NavController, private toastController: ToastController) {}

  // Función para redirigir a la página de registro
  goToRegistro() {
    this.navCtrl.navigateForward('/registro');
  }

  // Función para manejar el inicio de sesión
  iniciarSesion() {
    if (this.username) {
      console.log('Iniciar sesión');
      this.mostrarBienvenida(); // Llamamos a la función para mostrar el toast
      this.navCtrl.navigateForward('/principal'); // Redirige a la página principal
    } else {
      console.error('Por favor, ingresa tu nombre de usuario.');
      // Aquí puedes mostrar un toast de error si lo deseas
    }
  }

  forgotPassword() {
    console.log('Olvidaste tu contraseña');
    this.navCtrl.navigateForward('/cambiar-contrasena');
  }

  // Función para mostrar la notificación de bienvenida
  async mostrarBienvenida() {
    const toast = await this.toastController.create({
      message: `Bienvenido, ${this.username}!`,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
