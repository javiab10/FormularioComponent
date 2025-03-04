import { Injectable } from '@angular/core';
import { AuxContact } from '../model/aux-contact';
import { Country } from '../model/location/country';
import { Ccaa } from '../model/location/ccaa';
import { Province } from '../model/location/province';
import { Place } from '../model/location/place';
import { Location } from '../model/location';
import { Education } from '../model/academic/education';
import { Language } from '../model/academic/language';
import { WorkExperience } from '../model/work/work-experience';
import { Technology } from '../model/technology';
import { Source } from '../model/source';
import { State } from '../model/state';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  auxContact: AuxContact = new AuxContact();
  
  constructor() { }

  
  public get AuxContact() : AuxContact {
    return this.auxContact;
  }

  returnPersonalData(): any {
    return this.auxContact.Id, this.auxContact.Name, this.auxContact.Phone, this.auxContact.Email, this.auxContact.Location;
  }

  returnAcademicData(): any {
    return this.auxContact.Education, this.auxContact.Languages;
  }

  returnWorkData(): any {
    return this.auxContact.WorkExperiences;
  }

  returnGeneralData(): any {
    return this.auxContact.MinSalary, this.auxContact.MaxSalary, this.auxContact.Technologies, this.auxContact.Source, this.auxContact.State;
  }
  
  updatePersonalData(contactId: number, name: string, surname: string, phone: string, email: string, country: Country, ccaa: Ccaa, province: Province, place: Place): void {
    this.auxContact.Id = contactId;
    this.auxContact.Name = name + ' ' + surname;
    this.auxContact.Phone = phone;
    this.auxContact.Email = email;
    this.auxContact.Location = new Location(1, contactId, country, ccaa, province, place);
  }

  updateAcademicData(educationList: Education[], languageList: Language[]): void {
    this.auxContact.Education = educationList;
    this.auxContact.Languages = languageList;
  }

  updateWorkData(workList: WorkExperience[]): void {
    this.auxContact.WorkExperiences = workList;
  }

  updateGeneralData(minSalary: number, maxSalary: number, technologies: Technology[], source: Source, state: State): void {
    this.auxContact.MinSalary = minSalary;
    this.auxContact.MaxSalary = maxSalary;
    this.auxContact.Technologies = technologies;
    this.auxContact.Source = source;
    this.auxContact.State = state;
  }
}
