import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LandingPage } from '../landing/landing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //player: any;
  //players: any = [];

   //Use an observable which allows us to later subscribe to the players data
   players: Observable<object>;

  //Use an observable which allows us to later subscribe to the players data
  //players: Observable<object>;

  //, private httpClient: HttpClient
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {     
    //this.player = this.navParams.get('player');
    this.players = this.httpClient.get("https://footballlegends.azurewebsites.net/api/CA2Service/all");
    this.players.subscribe((response) => {      
      console.log(response);       
    });   
  }
 
  /*getAllPlayers(){
    this.players = this.httpClient.get("https://footballlegends.azurewebsites.net/api/CA2Service/all");
    this.players.subscribe((response) => {      
      console.log(response);       
    });    
  }*/

  goToHome(){
    this.navCtrl.setRoot(LandingPage);
  }

  reset(){
    //this.players as {};
    this.navCtrl.setRoot(LandingPage);
  }
 
}
