import {Component, Input, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SiteDataServiceProvider} from '../../providers/site-data-service/site-data-service';

@IonicPage()
@Component({
  selector: 'page-post-details',
  templateUrl: 'post-details.html',
})
export class PostDetailsPage implements OnInit {
  postId: number;
  postData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private siteDataService: SiteDataServiceProvider) {
  }

  ionViewDidLoad() {
    this.loadPostData();
  }

  ngOnInit() {

  }


  loadPostData() {
    this.postId = this.navParams.get('postId');
    this.siteDataService.getPostDataById(this.postId)
      .subscribe((postData) => {
        this.postData = postData;
        this.siteDataService.getUserDetailsById(this.postData.author)
          .subscribe((authorData) => {
            this.postData.authorData = authorData;
          }, (error) => {
            console.log(error);
          });
        this.postData.media_url = "";
        this.siteDataService.getMediaById(this.postData.featured_media)
          .subscribe((mediaData: any) => {
            this.postData.media_url = mediaData.media_details.sizes.medium.source_url;
          }, error => {
            console.log(error);
          });
        this.siteDataService.getCommentsByPostId(this.postId)
          .subscribe((comments: any[])=>{
            this.postData.comments = comments;
          },error => {
            console.log(error);
          });

      }, (error) => {
        console.log(error);
      });


  }


}
