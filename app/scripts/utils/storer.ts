import {Observable, Subject} from 'rxjs/Rx';

export class Storer<T> {

  private subject = new Subject<T>();

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

  public read(): Subject<T> {
    this._read().subscribe( json => {
      this.subject.next( json ? Storer.convertToObject<T>(json) : null );
    });

    return this.subject;
  }


  public write(data: any) {
    localStorage[this.index] = JSON.stringify(data);
    this.read();
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
