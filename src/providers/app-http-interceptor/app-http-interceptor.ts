import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse, HttpErrorResponse} from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators'
import {LoadingController} from 'ionic-angular';

/*
  Generated class for the AppHttpInterceptorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppHttpInterceptorProvider implements HttpInterceptor{

  loader: any;
  constructor(public http: HttpClient, private loadingCtrl: LoadingController) {
    console.log('Hello AppHttpInterceptorProvider Provider');
      this.loader = this.loadingCtrl.create({
          /*content: 'Please wait...',*/
          spinner: 'ios'
      });
  }


  //function which will be called for all http calls
  intercept(
      request: HttpRequest<any>,
      next: HttpHandler
  ): Observable<HttpEvent<any>> {
      //how to update the request Parameters
      /*const updatedRequest = request.clone({
       headers: request.headers.set("Authorization", "Some-dummyCode")
       });*/
      if(!this.loader){
          this.loader = this.loadingCtrl.create({
              /*content: 'Please wait...',*/
              spinner: 'ios'
          });
      }
      this.loader.present();

      //logging the updated Parameters to browser's console
      console.log("Before making api call : ", request);

      return next.handle(request).pipe(
          tap(
              event => {
                  //logging the http response to browser's console in case of a success
                  if (event instanceof HttpResponse) {
                      if(this.loader){
                          this.loader.dismiss();
                          this.loader = null;
                      }
                      //console.log("api call success :", event);
                  }
              },
              error => {
                  //logging the http response to browser's console in case of a failuer
                  if (error instanceof HttpResponse) {
                      console.log("api call error :", event);
                  }
              }
          )
      );
  }

}
