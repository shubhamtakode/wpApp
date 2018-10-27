import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SiteDataServiceProvider } from '../../providers/site-data-service/site-data-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit{

  aboutPageData: any;
  constructor(public navCtrl: NavController, private siteDataService: SiteDataServiceProvider) {

  }

  ngOnInit(){
    this.siteDataService.getPageDataById(104).subscribe((pageData:any)=>{
      this.aboutPageData =  pageData;

      this.aboutPageData.media_url = "";
      this.siteDataService.getMediaById(this.aboutPageData.featured_media).subscribe( (mediaData: any) => {
        this.aboutPageData.media_url = mediaData.media_details.sizes.medium.source_url ;
      }, error => {
        console.log(error);
      });


    },(error)=>{
      console.log(error);
    });
  }
}
