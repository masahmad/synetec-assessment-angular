import { Component, OnInit } from "@angular/core";
import { ICity } from "../../models/city.model";
import { CitiesService } from "../../services/cities/cities.service";

@Component({
  selector: "cities-list",
  templateUrl: "./cities-list.component.html",
  styleUrls: ["./cities-list.component.css"]
})
export class CitiesListComponent implements OnInit {
  cities: ICity[];

  constructor(private _citiesService: CitiesService) { }

  ngOnInit(): void {
    this.fetchData();

  }


  fetchData() {
    this._citiesService.fetchCities()
      .subscribe(data => {
        this.cities = data;
      });
  }


  deleteClick(id: number) {
    this._citiesService.removeCity(id)
      .subscribe(() => {
        this.fetchData(); // refresh list after delete
      });

  }
}
