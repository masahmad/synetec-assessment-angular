import { Injectable } from "@angular/core";
import { CitiesEndpoint } from "./cities-endpoint.service";
import { ICity } from "../../models/city.model";
import { getLocaleFirstDayOfWeek } from "@angular/common";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CitiesService {
  constructor(private _citiesEndpoint: CitiesEndpoint) { }

  fetchCities(): Observable<ICity[]> {
    return this._citiesEndpoint.get();
  }

  removeCity(id: number): Observable<any> {
    return this._citiesEndpoint.delete(id);
  }
}
