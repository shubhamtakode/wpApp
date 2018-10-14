import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SiteDataServiceProvider } from '../../providers/site-data-service/site-data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  postDataForListing: any[];
  pageNumber: number = 1;
  constructor(public navCtrl: NavController, public siteDataService: SiteDataServiceProvider) {

  }
  ngOnInit(){
    this.postDataForListing = [];
    this.loadPostData();
  }

  loadPostData(){
    this.siteDataService.getAllPostsDataByPage(this.pageNumber).subscribe((resp: any[]) => {
      resp.forEach((val : any, key: any) => {
        this.getAndAssociateMediaUrlToPost(val);
        this.postDataForListing.push(val);
      });
    });
  }


  getAndAssociateMediaUrlToPost(postData){
    postData.media_url = "";
    this.siteDataService.getMediaById(postData.featured_media).subscribe( (mediaData: any) => {
      postData.media_url = mediaData.media_details.sizes.medium.source_url ;
    }, error => {
      console.log(error);
    });
  }


  doInfinite(infiniteScroll) {
    setTimeout(() => {
      this.pageNumber++;
      this.loadPostData();
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 600);
  }
}
