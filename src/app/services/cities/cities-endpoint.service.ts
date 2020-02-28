import { Injectable, Injector } from "@angular/core";
import { environment } from "../../../environments/environment";
import { BaseService } from "../base.service";
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CitiesEndpoint extends BaseService {
  constructor(private _httpClient: HttpClient, private _injector: Injector) {
    super(_httpClient, _injector);
  }

  get(): Observable<any> {
    return this._httpClient.get(`${this.getBaseUrl()}api/cities`, this.getRequestHeaders());
  }

  delete(id: number) {
    return this._httpClient.delete(`${this.getBaseUrl()}api/cities/delete-city/${id}`, this.getRequestHeaders());
  }
}
