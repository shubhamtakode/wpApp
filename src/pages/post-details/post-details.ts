import {Component, Input, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SiteDataServiceProvider } from '../../providers/site-data-service/site-data-service';
@IonicPage()
@Component({
  selector: 'page-post-details',
  templateUrl: 'post-details.html',
})
export class PostDetailsPage implements OnInit{
  postId: number;
  postData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private siteDataService: SiteDataServiceProvider) {
  }

  ionViewDidLoad() {
    this.postId = this.navParams.get('postId');
    this.siteDataService.getPostDataById(this.postId).subscribe((postData)=>{
      this.postData = postData;
    }, (error)=>{
      console.log(error);
    });
  }

  ngOnInit(){

  }
}
