import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage { 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToPlayerList(){   
    //this.navCtrl.push(HomePage, {player: player});            
    this.navCtrl.setRoot(HomePage);            
  } 

}
