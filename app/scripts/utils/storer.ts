import {Observable} from 'rxjs/Rx';

export class Storer<T> {

  constructor(public index: string){}

  private _read(): Observable<String> {
    return new Observable<String>(observer => {
      let json: String = window.localStorage[this.index.toString()];

      if( json === null || typeof json === 'undefined' || json === 'undefined') {
        json = null;
      }

      setTimeout(() => {
        observer.next(json);
        observer.complete();
        }, 0);
    });
  }

  public read(): Observable<T> {
    return this._read().map<T>( json => {
      if( json === null ) {
        return null;
      }

      return Storer.convertToObject<T>(json);
    });
  }


  public write(data: any) {
    localStorage[this.index] = JSON.parse(data);
  }


  private static convertToObject<T>(json): T {
    let data: T;

    try {
      data = <T>JSON.parse(json);
    } catch( err ) {
      console.error(err);
      data = null;
    }

    return data;
  }
}
