export interface CovidModel {
  ID: string;
  Message: string;
  Global: Global;
  Countries: Country[];
  Date: string;
}

export interface Country {
  ID: string;
  Country: string;
  CountryCode: string;
  Slug: string;
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;
}

export class Global {
  NewConfirmed: number;
  TotalConfirmed: number;
  NewDeaths: number;
  TotalDeaths: number;
  NewRecovered: number;
  TotalRecovered: number;
  Date: string;

  constructor() {
    this.NewConfirmed = 0;
    this.TotalConfirmed = 0;
    this.NewDeaths = 0;
    this.TotalDeaths = 0;
    this.NewRecovered = 0;
    this.TotalRecovered = 0;
  }
}

export interface CountryDetailModel {
  Country: string;
  CountryCode: string;
  Province: string;
  City: string;
  CityCode: string;
  Lat: string;
  Lon: string;
  Cases: number;
  Status: string;
  Date: string;
}