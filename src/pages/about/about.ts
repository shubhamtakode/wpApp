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
    },(error)=>{
      console.log(error);
    });
  }
}
