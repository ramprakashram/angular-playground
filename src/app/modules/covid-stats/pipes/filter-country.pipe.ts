import { Pipe, PipeTransform } from '@angular/core';
import { Country } from 'src/app/models/covid-model';

@Pipe({
  name: 'filterCountry'
})
export class FilterCountryPipe implements PipeTransform {

  transform(countryList: Array<Country>, filterKey: string, searchValue: string): Array<Country> {
    if (filterKey && searchValue) {
      return countryList.filter(e => e[filterKey].toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
    } else {
      return countryList;
    }
  } 

}
