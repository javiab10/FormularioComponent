import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { Location } from '../model/location';
import { Education } from '../model/academic/education';
import { AcademicLevel } from '../model/academic/academic-level';
import { Language } from '../model/academic/language';
import { LanguageLevel } from '../model/academic/language-level';
import { Technology } from '../model/technology';
import { Source } from '../model/source';
import { State } from '../model/state';
import { WorkExperience } from '../model/work/work-experience';
import { HiberusLevel } from '../model/hiberus-level';
import { Country } from '../model/location/country';
import { Ccaa } from '../model/location/ccaa';
import { Province } from '../model/location/province';
import { Place } from '../model/location/place';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactList: Contact[] = [
    new Contact(
      1,
      'Juan',
      '123456789',
      'R9OoK@example.com',
      new Location (1, 1, new Country('ESP','España'), new Ccaa(1,'Madrid') , new Province(1, 1,'Madrid'), new Place(1, 'Madrid')),
      [
        new Education(1, 1, 'Bachiller', new AcademicLevel(5, 'Bachiller')),
        new Education(2, 1, 'Ingenieria Informatica', new AcademicLevel(7, 'Estudios Universitarios')),
        new Education(3, 1, 'Master en Big Data', new AcademicLevel(2, 'Estudios PostUniversitarios'))
      ],
      [
        new Language (1, 1, 'Español', new LanguageLevel(1, 'Nativo')),
        new Language (3, 1, 'Inglés', new LanguageLevel(6, 'C1')),
        new Language (4, 1, 'Francés', new LanguageLevel(4, 'B1')),
        new Language (2, 1, 'Euskera', new LanguageLevel(3, 'A2'))
      ],
      [
        new WorkExperience (1, 1, 'Arquitecto Software', 'Tracasa', 'Pamplona', new Date('2023-02-18'), new Date('2025-01-23'), true, [new Technology (1, 'Java'), new Technology (2, 'Python'),  new Technology (8, '.NET Framework')], new HiberusLevel (6, 'Arquitecto Software')),
      ],
      new Source(1, 'Linkedin'),
      [
        new Technology(1, 'Java'),
        new Technology(2, 'Python'),
        new Technology(8, '.NET Framework')
      ],
      26000,
      30000,
      new State(1, 'Talento')
    ),

    new Contact(
      2,
      'Ana',
      '987654321',
      'H4T6M@example.com',
      new Location (1, 2, new Country('ESP','España'), new Ccaa(1, 'Cataluña'), new Province(1, 1,'Barcelona'), new Place(1,'Barcelona')),
      [
        new Education(1, 2, 'Grado Medio en Sistemas Microinformaticos y Redes', new AcademicLevel(4, 'Grado Medio')),
        new Education(2, 2, 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma', new AcademicLevel(6, 'Grado Superior'))
      ],
      [
        new Language (1, 2, 'Español', new LanguageLevel(1, 'Nativo')),
        new Language (3, 2, 'Inglés', new LanguageLevel(4, 'B2')),
        new Language (4, 2, 'Francés', new LanguageLevel(4, 'B2'))
      ],
      [
        new WorkExperience (1, 2, 'Encargada Mercadona', 'Mercadona', 'Pamplona', new Date('2023-02-18'), new Date('2025-01-23'), false, undefined, undefined),
        new WorkExperience (2, 2, 'Junior Developer', 'Hiberus', 'Pamplona', new Date(), new Date(), true, [new Technology (1, 'Java'), new Technology (2, 'Python'), new Technology (5, 'TypeScript'),  new Technology (6, 'Angular')], new HiberusLevel(1, '8 Junior Developer'))
      ],
      new Source(1, 'InfoJobs'),
      [
        new Technology(1, 'Java'),
        new Technology(2, 'Python'),
        new Technology(3, 'C#'),
        new Technology (5, 'TypeScript'),
        new Technology(6, 'Angular'),
        new Technology(7, 'React'),
        new Technology(8, 'Entity Framework')
      ],
      22000,
      26000,
      new State(2, 'T+Tech')
    ),

    new Contact(
      3,
      'Pedro',
      '123456789',
      'R9OoK@example.com',
      new Location (1, 3, new Country('ESP','España'), new Ccaa(1, 'País Vasco'), new Province(1, 1, 'Bizkaia'), new Place(1, 'Bilbao')),
      [
        new Education(1, 3, 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma', new AcademicLevel(6, 'Grado Superior')),
        new Education(2, 3, 'Ingenieria Informatica', new AcademicLevel(7, 'Estudios Universitarios')),
        new Education(3, 3, 'Master en Big Data', new AcademicLevel(2, 'Estudios PostUniversitarios'))
      ],
      [
        new Language (1, 3, 'Español', new LanguageLevel(1, 'Nativo')),
        new Language (3, 3, 'Inglés', new LanguageLevel(7, 'C2')),
        new Language (4, 3, 'Francés', new LanguageLevel(6, 'C1')),
        new Language (2, 3, 'Euskera', new LanguageLevel(3, 'B1'))
      ],
      undefined,
      new Source(1, 'Referido'),
      [
        new Technology(1, 'Java'),
        new Technology(2, 'Python'),
        new Technology(3, 'Angular'),
        new Technology(7, 'React')
      ],
      28000,
      32000,
      new State(1, 'Llamada')
    )

  ]

  constructor() { }

  getAllContacts(): Contact[] {
    return this.contactList;
  }

  getContactListLenght(){
    return this.contactList.length;
  }

  getContactById(id: number): Contact | undefined {
    return this.contactList.find(contact => contact.getId() === id);
  }

  addContact(contact: Contact): void {
    this.contactList.push(contact);
  }

  deleteContact(id: number){
    if(id > -1){
      this.contactList.splice(this.contactList.findIndex(contact => contact.getId() === id), 1);
    }
  }

  

}
