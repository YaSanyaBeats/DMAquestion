import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YesnoAPIService {

  private _apiLink = 'https://yesno.wtf/api';

  constructor(private _http: HttpClient) { }

  public getAnswer(answer: boolean){
    return this._http.get(this._apiLink + '?force=' + answer);
  }
}
