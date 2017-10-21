import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';

import { ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;
  passRepetida: string;
  public loading: Loading;

  constructor(private authAf: AngularFireAuth,
     public navCtrl: NavController, 
     public navParams: NavParams,
     private alertCtrl: AlertController,
     private vibration: Vibration,
     private toastCtrl: ToastController,
     public loadingCtrl: LoadingController) {
  }

async register(user: User){
  try {
    if(this.passRepetida != user.password){
      this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Las contraseñas no coinciden',
        buttons: ['Ok']
      }).present();
    }
    else{
        const result = await this.authAf.auth.createUserWithEmailAndPassword(user.email, user.password);
        if (result != null) {
          this.registroExitoso();

          this.loading = this.loadingCtrl.create({
            //spinner: 'hide',
            content: '<ion-spinner name="bubbles">Cargando...</ion-spinner>',
            duration: 3000,
            dismissOnPageChange: true,
          });
          this.loading.present();

          this.navCtrl.setRoot(LoginPage);
        }
      }
  } catch (error) {
    console.error(error);
    if (error.code == "auth/argument-error") {
      this.camposIncompletosError();
      this.vibration.vibrate(500);
    }
    if (error.code == "auth/invalid-email") {
      this.usuarioInvalidoError();
      //this.vibration.vibrate(500);
    }
    if (error.code == "auth/weak-password") {
      this.contraseñaInvalidaError();
      this.vibration.vibrate(500);
    }
    if (error.code == "auth/email-already-in-use") {
      this.usuarioRepetidoError();
      this.vibration.vibrate(500);
    }
  }
}



/*


async register(user: User, passRepetido: string){
  if(passRepetido != user.password){
    this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Las contraseñas no coinciden',
      buttons: ['Ok']
    }).present();
  } else if(passRepetido == "" || user.password == "" || user.email == ""){
    this.toastCtrl.create({
      message: "Debe completar todos los campos",
      duration: 2000
    }).present();
  } else {
      let loading = this.loadSpinner();
      loading.present();
      await this.authAf.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(r => { 
        loading.dismiss();
        this.toastCtrl.create({message: "Usuario registrado con éxito!", duration: 3000}).present(); 
        this.navCtrl.setRoot(LoginPage);
      })
      .catch(e => {
        loading.dismiss();
        this.toastCtrl.create({message: "Error al registrarse:" + e.message, duration: 3000}).present();
      });
    }
  }

*/











camposIncompletosError() {
  this.vibration.vibrate(500);
  //let alert = this.alertCtrl.create({
  let toast = this.toastCtrl.create({
    message: 'Por favor, complete todos los campos',
    showCloseButton: true,
    closeButtonText: 'Cerrar',
    position: 'bottom',
    cssClass: "ToastWarning",
    dismissOnPageChange: true,
    //title: 'Campos incompletos',
    //subTitle: 'Por favor, complete todos los campos',
    //buttons: ['Cerrar']
  });
  toast.present();
  //alert.present();
}

usuarioInvalidoError() {
  this.vibration.vibrate(500);
  let alert = this.alertCtrl.create({
    title: 'Usuario inválido',
    subTitle: 'Por favor, ingrese un usuario válido',
    buttons: ['Cerrar']
  });
  alert.present();
}

contraseñaInvalidaError() {
  this.vibration.vibrate(500);
  //let alert = this.alertCtrl.create({
    let toast = this.toastCtrl.create({
      message: 'La contraseña debe tener al menos 6 caracteres',
      cssClass: "ToastWarning",
      showCloseButton: true,
      closeButtonText: "Cerrar",
      dismissOnPageChange: true,
      position: 'middle'
    //title: 'Contraseña inválida',
    //subTitle: 'La contraseña debe tener al menos 6 caracteres',
    //buttons: ['Cerrar']
  });
  toast.present();
  //alert.present();
}

usuarioRepetidoError() {
  this.vibration.vibrate(500);
  //let alert = this.alertCtrl.create({
    let toast = this.toastCtrl.create({
    message: 'El usuario que desea ingresar ya existe',
    cssClass: "ToastWarning",
    showCloseButton: true,
    closeButtonText: "Cerrar",
    dismissOnPageChange: true,
    position: 'top'    
    //title: 'Usuario existente',
    //subTitle: 'El usuario que desea ingresar ya existe',
    //buttons: ['Cerrar']
  });
  toast.present();
  //alert.present();
}
/*
registroExitoso() {
  let alert = this.alertCtrl.create({
    title: '¡Registro exitoso!',
    subTitle: 'Su cuenta ha sido creada exitosamente',
    buttons: ['Cerrar']
  });
  alert.present();
}*/

//presentToast
registroExitoso() {
  let toast = this.toastCtrl.create({
    message: 'Su cuenta ha sido creada exitosamente',
    duration: 1500,
    position: 'top',
    cssClass: "ToastAssert",
    showCloseButton: true,
    closeButtonText: "Cerrar",
    //dismissOnPageChange: true
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}


}
