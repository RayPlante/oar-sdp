import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Config } from '../config/env.config';


/**
 * This class provides the TaxonomyList service with methods to read taxonomies and add names.
 */
@Injectable()
export class TaxonomyListService {
  private RestAPIURL: string = Config.API;

  /**
   * Creates a new TaxonomyListService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @return {string[]} The Observable for the HTTP request.
   */
  get(): Observable<string[]> {
  //  return this.http.get('/assets/taxonomies.json')
    //                .map((res: Response) => res.json())
      //              .catch(this.handleError);

    //return this.http.get('http://10.200.222.250:8082/RMMApi/taxanomy?sort=researchCategory,asc')
    //return this.http.get('http://localhost:9090/RMMApi/taxanomy?sort=researchCategory,asc')
    return this.http.get(this.RestAPIURL + 'taxonomy?level=1')
     .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  /**
    * Handle HTTP error
    */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

