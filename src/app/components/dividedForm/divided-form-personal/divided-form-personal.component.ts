import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CountryService } from '../../../services/location/country.service';
import { CcaaService } from '../../../services/location/ccaa.service';
import { ProvinceService } from '../../../services/location/province.service';
import { Country } from '../../../model/location/country';
import { Ccaa } from '../../../model/location/ccaa';
import { Province } from '../../../model/location/province';

@Component({
  selector: 'app-divided-form-personal',
  imports: [ReactiveFormsModule],
  templateUrl: './divided-form-personal.component.html',
  styleUrl: './divided-form-personal.component.scss'
})
export class DividedFormPersonalComponent {
  @Input() personalDataForm!: FormGroup;

  countriesList!: Country[];
  ccaaList!: Ccaa[];
  provinceList!: Province[];

  constructor(private countryService: CountryService, private ccaaService: CcaaService, private provinceService: ProvinceService){}

  ngOnInit(){
    this.countriesList = this.countryService.getAllCountries();
    this.ccaaList = this.ccaaService.getAllCcaa();
    this.provinceList = this.provinceService.getAllProvinces();
  }
}
