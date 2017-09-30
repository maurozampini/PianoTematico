import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../../pages/login/login';

//Imports agregados por mi
import { AlertController } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { MediaPlugin } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

//variables
  tematica: string = "autos";
  file: MediaPlugin = null;

//constructor
  constructor(private authAf: AngularFireAuth,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public media: Media) {

  }

  confirmarCerrarSesion() {
    let alert = this.alertCtrl.create({
      title: 'Cerrar sesión',
      message: '¿Desea cerrar la sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar clickeado');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirmar clickeado');
            this.authAf.auth.signOut();
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
  }

  tecla1() {
    console.log(this.tematica);
    const onStatusUpdate = (status) => console.log(status);
    if('autos' == this.tematica) {
      const sound =  new MediaPlugin('/android_asset/www/assets/sounds/auto1.mp3', onStatusUpdate);
      this.playSound(sound);
    } else if('animales' == this.tematica) {
      const sound =  new MediaPlugin('/android_asset/www/assets/sounds/animal1.mp3', onStatusUpdate);
      this.playSound(sound);
    } else if('frases' == this.tematica) {
      const sound =  new MediaPlugin('/android_asset/www/assets/sounds/frase1.mp3', onStatusUpdate);
      this.playSound(sound);
    }
  }
  
/*
    const onStatusUpdate = (status) => console.log(status);
    

    

    test.play();

    let duration = test.getDuration();
    console.log(duration);
    
    setTimeout(() => {
      console.log("freno");
      test.stop();
    }, 1000);*/
  

    playSound(sound) {
      if (sound.media) {
        sound.stop();
      }
      sound.play();
      setTimeout(() => {
        sound.stop();
      }, 3000);
    }
  
    tecla2() {
      const onStatusUpdate = (status) => console.log(status);
      if('autos' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/auto2.mp3', onStatusUpdate);
        this.playSound(sound);
      } else if('animales' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/animal2.mp3', onStatusUpdate);
        this.playSound(sound);
      } else if('frases' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/frase2.mp3', onStatusUpdate);
        this.playSound(sound);
      }
    }
  
    tecla3() {
      const onStatusUpdate = (status) => console.log(status);
      if('autos' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/auto3.mp3', onStatusUpdate);
        this.playSound(sound);
      } else if('animales' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/animal3.mp3', onStatusUpdate);
        this.playSound(sound);
      } else if('frases' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/frase3.mp3', onStatusUpdate);
        this.playSound(sound);
      }
    }
  
    tecla4() {
      const onStatusUpdate = (status) => console.log(status);
      if('autos' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/auto4.mp3', onStatusUpdate);
        this.playSound(sound);
      } else if('animales' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/animal4.mp3', onStatusUpdate);
        this.playSound(sound);
      } else if('frases' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/frase4.mp3', onStatusUpdate);
        this.playSound(sound);
      }
    }
  
    tecla5() {
      const onStatusUpdate = (status) => console.log(status);
      if('autos' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/auto5.mp3', onStatusUpdate);
        this.playSound(sound);
      } else if('animales' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/animal5.mp3', onStatusUpdate);
        this.playSound(sound);
      } else if('frases' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/frase5.mp3', onStatusUpdate);
        this.playSound(sound);
      }
    }
  






}
