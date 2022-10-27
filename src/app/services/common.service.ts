import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PreffixUrl} from "../preffix-url.enum";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _httpClient: HttpClient) { }
  public postToUrl(){}

  getAllData(url:string): Observable<any> {
      return this._httpClient.get(url);
  }

}
