import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';


@Injectable()
export class NewsService {
  constructor(private http: Http) { }

  private _url = '/news'; 

  getNews () {
    return this.http.get(this._url)
      .map(res => res.json())
      // .do(res => console.log("res", res))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error || 'Server error');
  }
}