import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SiteDataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SiteDataServiceProvider {

  siteUrl: string;
  constructor(public http: HttpClient) {
    console.log('Hello SiteDataServiceProvider Provider');
    this.siteUrl = "https://www.shubhsblog.com/wp-json/wp/v2/";
  }

  getAllPostsDataByPage(pageNumber: number) {
    return this.http.get(this.siteUrl + 'posts/?page='+pageNumber+'&context=embed');
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
