import { Injectable } from '@angular/core';
import { Country } from '../../model/location/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  countryList: Country[] = [
    new Country('ESP', 'España'),
    new Country('DEU', 'Alemania'),
    new Country('AND', 'Andorra'),
    new Country('ARG', 'Argentina'),
    new Country('COL', 'Colombia'),
    new Country('ECU', 'Ecuador'),
    new Country('USA', 'Estados Unidos'),
    new Country('ITA', 'Italia'),
    new Country('MAR', 'Marruecos'),
    new Country('MEX', 'México'),
    new Country('NIC', 'Nicaragua'),
    new Country('GBR', 'Reino Unido'),
    new Country('DOM', 'República Dominicana'),
    new Country('ROU', 'Rumanía'),
    
  ]

  constructor() { }

  getAllCountries(): Country[] {
    return this.countryList;
  }

  getCountryById(idCountry: string): Country | undefined{
    return this.countryList.find(c => c.getId() === idCountry);
  }
}
