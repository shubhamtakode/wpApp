import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the OrderByPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(array: Array<any>, orderField: string, orderType: boolean ): Array<string> {
    array.sort( ( a: any, b: any ) => {
      let ae = a[ orderField ];
      let be = b[ orderField ];
      if ( ae == undefined && be == undefined ) return 0;
      if ( ae == undefined && be != undefined ) return orderType ? 1 : -1;
      if ( ae != undefined && be == undefined ) return orderType ? -1 : 1;
      if ( ae == be ) return 0;
      return orderType ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1);
    } );
    return array;
  }
}
