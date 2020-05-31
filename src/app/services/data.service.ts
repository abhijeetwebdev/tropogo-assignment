import { Injectable } from '@angular/core';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public cities: City[] = [
    {
      id: "1",
      name: "Mumbai",
      state: "Maharashtra"
    }, {
      id: "2",
      name: "Delhi",
      state: "Delhi"
    }, {
      id: "3",
      name: "Bengaluru",
      state: "Karnataka"
    }, {
      id: "4",
      name: "Ahmedabad",
      state: "Gujarat"
    }, {
      id: "5",
      name: "Hyderabad",
      state: "Telangana"
    }, {
      id: "6",
      name: "Chennai",
      state: "Tamil Nadu"
    }, {
      id: "7",
      name: "Kolkata",
      state: "West Bengal"
    }, {
      id: "8",
      name: "Pune",
      state: "Maharashtra"
    }, {
      id: "9",
      name: "Jaipur",
      state: "Rajasthan"
    }, {
      id: "10",
      name: "Surat",
      state: "Gujarat"
    }
  ];

  constructor() { }

  getCities(): City[] {
    return this.cities;
  }
}
