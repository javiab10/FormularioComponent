import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Location } from '../../model/location';
import { Education } from '../../model/academic/education';
import { WorkExperience } from '../../model/work/work-experience';
import { Language } from '../../model/academic/language';
import { LanguageLevel } from '../../model/academic/language-level';
import { AcademicLevel } from '../../model/academic/academic-level';
import { Contact } from '../../model/contact';
import { Technology } from '../../model/technology';
import { Source } from '../../model/source';
import { State } from '../../model/state';
import { HiberusLevel } from '../../model/hiberus-level';
import { ContactService } from '../../services/contact.service';
import { Country } from '../../model/location/country';
import { Ccaa } from '../../model/location/ccaa';
import { Province } from '../../model/location/province';
import { Place } from '../../model/location/place';
import { CountryService } from '../../services/location/country.service';
import { CcaaService } from '../../services/location/ccaa.service';
import { AcademicLevelService } from '../../services/academic/academic-level.service';
import { LanguagelevelService } from '../../services/academic/languagelevel.service';
import { HiberusLevelService } from '../../services/hiberus-level.service';
import { ProvinceService } from '../../services/location/province.service';
import { TechnologyService } from '../../services/technology.service';
import { SourceService } from '../../services/source.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-form-add-contact',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-add-contact.component.html',
  styleUrl: './form-add-contact.component.scss'
})
export class FormAddContactComponent {
  window: number = 1;
  items: any = new Array(9);
  toggleChecked: boolean = true;
  
  countriesList!: Country[];
  ccaaList!: Ccaa[];
  provinceList!: Province[];
  academicLevelList!: AcademicLevel[];
  languageLevelList!: LanguageLevel[];
  technologyList!: Technology[];
  hiberusLevelList!: HiberusLevel[];
  sourceList!: Source[];
  stateList!: State[];

  contactForm: FormGroup = new FormGroup({});
  submitted: boolean = false;

  constructor (private fb: FormBuilder, private contactService: ContactService, private countryService: CountryService, private ccaaService: CcaaService, private provinceService: ProvinceService, private academicLevelService: AcademicLevelService, private languageLevelService: LanguagelevelService, private technologyService:TechnologyService, private hiberusLevelService: HiberusLevelService, private sourceService: SourceService, private stateService: StateService){}

  ngOnInit(){
    this.contactForm = this.fb.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(9), Validators.maxLength(9)]),
      email: new FormControl('', Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')),
      country: new FormControl('País'),
      ccaa: new FormControl('CCAA'), //Agruparlos??
      province: new FormControl('Provincia'),
      place: new FormControl(''),
      educations: this.fb.array([]),
      languages: this.fb.array([]),
      workExperiences: this.fb.array([]),
      minSalary: new FormControl('24000', Validators.min(15876)),
      maxSalary: new FormControl('24000', Validators.min(15876)),
      technologies: new FormControl(''),
      source: new FormControl(''),
      state: new FormControl('')
      
    });

    this.countriesList = this.countryService.getAllCountries();
    this.ccaaList = this.ccaaService.getAllCcaa();
    this.provinceList = this.provinceService.getAllProvinces();
    this.academicLevelList = this.academicLevelService.getAllAcademicLevels();
    this.languageLevelList = this.languageLevelService.getAllLanguageLevels();
    this.technologyList =this.technologyService.getAllTechnologies();
    this.hiberusLevelList = this.hiberusLevelService.getAllHiberusLevels();
    this.sourceList = this.sourceService.getAllSources();
    this.stateList = this.stateService.getAllStates();

  }

  //EDUCATION
  get educations(){
    return this.contactForm.get('educations') as FormArray;
  }

  createEducation(){
    return this.fb.group({
      level: new FormControl('Nivel de Estudios'),
      description: new FormControl('')
    });
  }

  addEducation(){
    this.educations.push(this.createEducation());
  }

  removeEducation(i: number){
    this.educations.removeAt(i);
  }

  //LANGUAGES
  get languages(){
    return this.contactForm.get('languages') as FormArray;
  }

  createLanguage(){
    return this.fb.group({
      language: new FormControl(''),
      level: new FormControl('Nivel de Idioma')
    });
  }

  addLanguage(){
    this.languages.push(this.createLanguage());
  }

  removeLanguage(i: number){
    this.languages.removeAt(i);
  }

  //WORK EXPERIENCE
  get workExperiences(){
    return this.contactForm.get('workExperiences') as FormArray;
  }

  createWorkExperience(){
    return this.fb.group({
      position: new FormControl(''),
      description: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      company: new FormControl(''),
      location: new FormControl(''),
      relatedToOurIndustry: new FormControl(true),
      workTechnologies: new FormControl(''),
      hiberusLevel: new FormControl('')
    })
  }

  addWorkExperience(){
    this.workExperiences.push(this.createWorkExperience());
  }
  
  removeWorkExperience(i: number){
    this.workExperiences.removeAt(i);
  }


  onChoose(n: number){
    this.window = n;
  }

  onNext(){
    if(this.window < 4){
      this.window += 1;
    }
  }

  onPrev(){
    if(this.window > 1){
      this.window -= 1;
    }
  }

  toggle(){
    this.toggleChecked = !this.toggleChecked;
  }
  
  onSubmit(){
    if(this.contactForm.invalid){
      alert('Formulario inválido');
      return;
    }

    //Personal data
    const newContactId: number = this.contactService.getContactListLenght() + 1;
    const newName: string = [this.contactForm.get('name')?.value, this.contactForm.get('surname')?.value].join(' ');
    const newPhone: string = this.contactForm.get('phone')?.value;
    const newEmail: string = this.contactForm.get('email')?.value;
    
    //Location
    const loIdCountry: string = this.contactForm.get('country')?.value;
    const loCountryDescription: string = this.countryService.getCountryById(loIdCountry)?.getDescription() ?? '';
    const loIdCca: number = this.contactForm.get('ccaa')?.value;
    const loCcaaDescription: string = this.ccaaService.getCcaaById(loIdCca)?.getDescription() ?? '';
    const loIdProvince: number = this.contactForm.get('province')?.value;
    const loProvinceDescription: string = this.provinceService.getProvinceById(loIdProvince)?.getDescription() ?? '';

    const loCountry: Country = new Country (loIdCountry, loCountryDescription);
    const loCcaa: Ccaa = new Ccaa (loIdCca, loCcaaDescription);
    const loProvince: Province = new Province (loIdProvince, loIdCca, loProvinceDescription);
    const loPlace: Place = new Place(1, this.contactForm.get('place')?.value);
    const newLocation: Location = new Location(1, newContactId, loCountry, loCcaa, loProvince, loPlace);

    //Education
    let newEducations: Education[] = [];
    this.educations.controls.forEach((education, index) => {
      const edAcademicLevelId: number = education.get('level')?.value;
      const edAcademicLevelDescription: string = this.academicLevelService.getAcademicLevelById(edAcademicLevelId)?.getDescription() ?? '';

      newEducations.push(
        new Education(
          index, newContactId, education.get('description')?.value, 
          new AcademicLevel(edAcademicLevelId, edAcademicLevelDescription)
        ));
    });

    //Languages
    let newLanguages: Language[] = [];
    this.languages.controls.forEach((language, index) => {
      const lanLanguageLevelId: number = language.get('level')?.value;
      const lanLanguageLevelDescription: string = this.languageLevelService.getLanguageLevelById(lanLanguageLevelId)?.getDescription() ?? '';

      newLanguages.push(
        new Language(
          index, 
          newContactId,
          language.get('language')?.value, 
          new LanguageLevel(lanLanguageLevelId, lanLanguageLevelDescription)
        ));
    });
    
    //WorkExperiences
    let newWorkExperiences: WorkExperience[] = [];
    this.workExperiences.controls.forEach((workExperience, index) => {
      const wStartDate: Date = new Date(workExperience.get('startDate')?.value);
      const wEndDate: Date = new Date(workExperience.get('endDate')?.value);

      //Work Technologies
      let wTechnologies: Technology[] = [];

      const wTechnologiesSelected = workExperience.get('workTechnologies')?.value;
      if(wTechnologiesSelected.length > 0){
        wTechnologiesSelected.forEach((techId: any) => {
          const techDescription = this.technologyService.getTechnologyById(techId)?.getDescription() ?? '';
          wTechnologies.push(new Technology(techId, techDescription));
        });
      }
      

      newWorkExperiences.push(
        new WorkExperience(
          index, 
          newContactId,
          workExperience.get('position')?.value,
          workExperience.get('company')?.value,
          workExperience.get('location')?.value,
          wStartDate,
          wEndDate,
          workExperience.get('relatedToOurIndustry')?.value,
          wTechnologies,
          workExperience.get('hiberusLevel')?.value
        ))
    });

    const newMinSalary: number = this.contactForm.get('minSalary')?.value;
    const newMaxSalary: number = this.contactForm.get('maxSalary')?.value;
    
    //Technologies
    let newTechnologies: Technology[] = [];
    
    const technologiesSelected = this.contactForm.get('technologies')?.value;
    if(technologiesSelected.length > 0){
      technologiesSelected.forEach((techId: any) => {
        const techDescription = this.technologyService.getTechnologyById(techId)?.getDescription() ?? '';
        newTechnologies.push(new Technology(techId, techDescription));
      });
    }
    
    
    //Source
    const sourceId: number = this.contactForm.get('source')?.value;
    const sourceDescription: string = this.sourceService.getSourceById(sourceId)?.getDescription() ?? '';

    const newSource: Source = new Source(sourceId, sourceDescription);

    //State
    const stateId: number = this.contactForm.get('state')?.value;
    const stateDescription: string = this.stateService.getStateById(stateId)?.getDescription() ?? '';

    const newState: State = new State (stateId, stateDescription);

    const newContact: Contact = new Contact(
      newContactId,
      newName,
      newPhone,
      newEmail,
      newLocation,
      newEducations,
      newLanguages,
      newWorkExperiences,
      newSource,
      newTechnologies,
      newMinSalary,
      newMaxSalary,
      newState
    )

    this.contactService.addContact(newContact);
    
    console.log(newContact);
  }
}
