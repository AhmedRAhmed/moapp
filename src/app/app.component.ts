import { Component, ViewChild } from '@angular/core';
import { IonRouterOutlet, Platform, AlertController } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { async } from '@angular/core/testing';
import { Plugins } from '@capacitor/core';
const { App } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, { static: true }) routerOutlet: IonRouterOutlet

  constructor(
    private platform: Platform,
    // private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    private location: Location,
    private alertCtrl: AlertController,
    // public roterOutlet: IonRouterOutlet

  ) {
    this.initializeApp();
    this.backBtnEvent()

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      // this.statusBar.styleLightContent();
      // this.splashScreen.hide();
      this.router.navigateByUrl('/splash')
    });
  }

  backBtnEvent() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      if (!this.routerOutlet.canGoBack()) {
        this.backBtnAlert()
      }else{
        this.location.back();
      }
    });
  }

async backBtnAlert(){
    const alert = this.alertCtrl.create({
      message:"Back button pressed",
      buttons:[{
        text:'cancel',
        role:'cancel'
      },
    {
      text:'Close App',
      handler:()=>{
        navigator['App'].exitApp()
      }
    }]
    }); (await alert).present()
  }
}
