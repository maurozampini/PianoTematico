import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../../pages/login/login';

//Imports agregados por mi
import { AlertController } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { MediaPlugin } from 'ionic-native';


//imports agregados para probar el audio record
import { Events } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

//variables
  tematica: string = "autos";
  file: MediaPlugin = null;
  newItem: string = "";
  mostrarLista: boolean = false;
  //variable para pausa
  sonidoActual: MediaPlugin;

  public media: MediaPlugin;
  caminho: any;
  //constructor
  constructor(private authAf: AngularFireAuth,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    //public media: Media,
    public events: Events,
    public loadingCtrl: LoadingController,
    public platform: Platform) {

  }


  startRecording(){
  
  if (this.platform.is('ios')){
    this.caminho = '../Library/NoCloud/recording.wav';
  }else{
    this.caminho = "recording.mp3";
  }
  //this program record only 3 seconds -- to record more change loader time
  let loader = this.loadingCtrl.create({
  content:"Grabando...",
  duration: 3000
  });
  
  try{
    this.media = new MediaPlugin(this.caminho);
    this.media.startRecord();
    loader.present();
  }catch (e){
    this.finishedRecording("ERROR","No se puede empezar a grabar.");
    //throw e;
  }
  
  loader.onDidDismiss(()=>{
    //loader.dismiss();
    try{
      this.media.stopRecord();
      this.finishedRecording("Grabado finalizado","Enviando audio al servidor!");
    }catch (e){
      this.finishedRecording("ERROR","No se puede empezar a grabar.");
    }
  
  });
  }
  
   play(){
  try{
    this.media.play();
  }catch (e){
    this.finishedRecording("ERROR","No se grabó nada.");
  }
  }
  
   finishedRecording(titulo,subtitulo){
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: subtitulo,
      buttons: ['OK']
    });
    alert.present();
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
    if (this.sonidoActual != null) {
      this.sonidoActual.stop();
    }
    const onStatusUpdate = (status) => console.log(status);
    if('autos' == this.tematica ) {
      const sound =  new MediaPlugin('/android_asset/www/assets/sounds/auto1.mp3', function(){
        console.log("Silence played succssfully");
        this.media.stop();
      });
      this.sonidoActual = sound;
      this.playSound(sound);
    } else if('animales' == this.tematica) {
      const sound =  new MediaPlugin('/android_asset/www/assets/sounds/animal1.mp3', function(){
        console.log("Silence played succssfully");
        this.media.stop();
      });
      this.sonidoActual = sound;
      this.playSound(sound);
    } else if('frases' == this.tematica) {
      const sound =  new MediaPlugin('/android_asset/www/assets/sounds/frase1.mp3', function(){
        console.log("Silence played succssfully");
        this.media.stop();
      });
      this.sonidoActual = sound;
      this.playSound(sound);
    }
  }
  


stopSound(sound){
  sound.stop();
}

    playSound(sound) {
      sound.play();
      setTimeout(() => {
        sound.stop();
      }, 5000);
    }
  
    tecla2() {
      if (this.sonidoActual != null) {
        this.sonidoActual.stop();
      }
      const onStatusUpdate = (status) => console.log(status);
      if('autos' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/auto2.mp3', function(){
          console.log("Silence played succssfully");
          this.media.stop();
        });
        this.sonidoActual = sound;
        this.playSound(sound);
      } else if('animales' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/animal2.mp3', function(){
          console.log("Silence played succssfully");
          this.media.stop();
        });
        this.sonidoActual = sound;
        this.playSound(sound);
      } else if('frases' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/frase2.mp3', function(){
          console.log("Silence played succssfully");
          this.media.stop();
        });
        this.sonidoActual = sound;
        this.playSound(sound);
      }
    }
  
    tecla3() {
      if (this.sonidoActual != null) {
        this.sonidoActual.stop();
      }
      const onStatusUpdate = (status) => console.log(status);
      if('autos' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/auto3.mp3', function(){
          console.log("Silence played succssfully");
          this.media.stop();
        });
        this.sonidoActual = sound;
        this.playSound(sound);
      } else if('animales' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/animal3.mp3', function(){
          console.log("Silence played succssfully");
          this.media.stop();
        });
        this.sonidoActual = sound;
        this.playSound(sound);
      } else if('frases' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/frase3.mp3', function(){
          console.log("Silence played succssfully");
          this.media.stop();
        });
        this.sonidoActual = sound;
        this.playSound(sound);
      }
    }
  
    tecla4() {
      if (this.sonidoActual != null) {
        this.sonidoActual.stop();
      }
      const onStatusUpdate = (status) => console.log(status);
      if('autos' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/auto4.mp3', function(){
          console.log("Silence played succssfully");
          this.media.stop();
        });
        this.sonidoActual = sound;
        this.playSound(sound);
      } else if('animales' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/animal4.mp3', function(){
          console.log("Silence played succssfully");
          this.media.stop();
        });
        this.sonidoActual = sound;
        this.playSound(sound);
      } else if('frases' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/frase4.mp3', function(){
          console.log("Silence played succssfully");
          this.media.stop();
        });
        this.sonidoActual = sound;
        this.playSound(sound);
      }
    }
  
    tecla5() {
      if (this.sonidoActual != null) {
        this.sonidoActual.stop();
      }
      const onStatusUpdate = (status) => console.log(status);
      if('autos' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/auto5.mp3', function(){
          console.log("Silence played succssfully");
          this.media.stop();
        });
        this.sonidoActual = sound;
        this.playSound(sound);
      } else if('animales' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/animal5.mp3', function(){
          console.log("Silence played succssfully");
          this.media.stop();
        });
        this.sonidoActual = sound;
        this.playSound(sound);
      } else if('frases' == this.tematica) {
        const sound =  new MediaPlugin('/android_asset/www/assets/sounds/frase5.mp3', function(){
          console.log("Silence played succssfully");
          this.media.stop();
        });
        this.sonidoActual = sound;
        this.playSound(sound);
      }
    }

}

