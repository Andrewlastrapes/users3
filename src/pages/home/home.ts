import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	users: any;
	names = [];
	id = [];
	usernames = [];

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {

  }

  getUsers(){
  	this.restProvider.getData().then(data => {
  		this.users = data;
  		for (var i = 0; i < this.users.length; i++){
  			this.names.push(this.users[i].name);

  		}
  		for (var i = 0; i < this.users.length; i++){
  			this.id.push(this.users[i].id);

  		}
  		for (var i = 0; i < this.users.length; i++){
  			this.usernames.push(this.users[i].username);

  		}

  	})
  }

  ngOnInit(){
  	this.getUsers();
  }

}
