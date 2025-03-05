import { Component, Input } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule, FormBuilder, FormControl } from '@angular/forms';
import { AcademicLevel } from '../../../model/academic/academic-level';
import { LanguageLevel } from '../../../model/academic/language-level';
import { AcademicLevelService } from '../../../services/academic/academic-level.service';
import { LanguagelevelService } from '../../../services/academic/languagelevel.service';

@Component({
  selector: 'app-divided-form-academic',
  imports: [ReactiveFormsModule],
  templateUrl: './divided-form-academic.component.html',
  styleUrl: './divided-form-academic.component.scss'
})
export class DividedFormAcademicComponent {
  @Input() academicDataForm!: FormGroup;
  
  academicLevelList!: AcademicLevel[];
  languageLevelList!: LanguageLevel[];

  constructor(private fb: FormBuilder, private academicLevelService: AcademicLevelService, private languageLevelService: LanguagelevelService,){}

  ngOnInit(){
    this.academicLevelList = this.academicLevelService.getAllAcademicLevels();
    this.languageLevelList = this.languageLevelService.getAllLanguageLevels();
  }

  //EDUCATION
    get educations(){
      return this.academicDataForm.get('educations') as FormArray;
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
      return this.academicDataForm.get('languages') as FormArray;
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
}
