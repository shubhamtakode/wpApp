import {Component, Input, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-post-details',
  templateUrl: 'post-details.html',
})
export class PostDetailsPage implements OnInit{
  id: number;
  post: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostDetailsPage');
  }

  ngOnInit(){
    this.id = this.navParams.get('id');
    this.post = {
      title: 'Hellow World',
      contents: '<b>fkjrf fjkfbs fsf snfejf e</b>'
    }
    console.log(this.id);
  }
}
