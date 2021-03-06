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

  //Use an observable which allows us to later subscribe to the players data
  players: Observable<object>;

  //Constructor automatically gets player data from MS Azure via the RESTApi
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {     
    this.players = this.httpClient.get("https://footballlegends.azurewebsites.net/api/CA2Service/all");
    this.players.subscribe((response) => {      
      console.log(response);       
    });   
  }

  //Function to get back to welcome page
  goToHome(){
    this.navCtrl.setRoot(LandingPage);
  } 
}
