import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

/*
  Generated class for the SiteDataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SiteDataServiceProvider {

  siteUrl: string;
  postsDataForListingByPage: any;

  constructor(public http: HttpClient) {
    console.log('Hello SiteDataServiceProvider Provider');
    this.siteUrl = "https://www.shubhsblog.com/wp-json/wp/v2/";
    this.postsDataForListingByPage = {};
  }

  getAllPostsDataByPage(pageNumber: number) {
    if(this.postsDataForListingByPage[pageNumber]){
      return Observable.create(observer => {
        observer.next(this.postsDataForListingByPage[pageNumber]);
        observer.complete();
      });
    }else{
      return this.http.get(this.siteUrl + 'posts/?page='+pageNumber+'&context=embed').map(
          (response) => {
            this.postsDataForListingByPage[pageNumber] = response;
            return response;
          }
      ).catch(
          (error) => {
            return Observable.throw(error);
          }
      );
    }
  }

  getPostDataById(postId: number){
    return this.http.get(this.siteUrl + 'posts/'+postId);
  }

  getMediaById(mediaId: number){
    return this.http.get(this.siteUrl + 'media/'+mediaId);
  }

  getPageDataById(pageId:number){
    return this.http.get(this.siteUrl + 'pages/'+pageId);
  }

  getUserDetailsById(userId: number){
    return this.http.get(this.siteUrl + 'users/'+userId);
  }

  fetchDataByUrl(url:string){
    return this.http.get(url);
  }

  getCommentsByPostId(postId: number){
    return this.http.get(this.siteUrl + 'comments?post=' + postId);
  }

}
