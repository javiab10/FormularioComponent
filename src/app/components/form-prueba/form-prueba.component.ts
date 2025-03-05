import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AcademicLevel } from '../../model/academic/academic-level';
import { FormPrueba1Component } from '../form-prueba1/form-prueba1.component';


@Component({
  selector: 'app-form-prueba',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormPrueba1Component],
  templateUrl: './form-prueba.component.html',
  styleUrl: './form-prueba.component.scss'
})

export class FormPruebaComponent {
  contactForm!: FormGroup;

  studiesForm!: FormGroup;
  academicLevels: AcademicLevel[] = [
    new AcademicLevel(1, 'Sin Estudios'),
    new AcademicLevel(2, 'Educación Obligatoria'),
    new AcademicLevel(3, 'Educación Secundaria'),
    new AcademicLevel(4, 'Grado Medio'),
    new AcademicLevel(5, 'Bachillerato'),
    new AcademicLevel(6, 'Grado Superior'),
    new AcademicLevel(7, 'Estudios Universitarios'),
    new AcademicLevel(8, 'Estudios Post-Universitarios'),
    new AcademicLevel(9, 'Títulos no Homologados'),
  ]

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.contactForm = this.fb.group({
      personalData: this.fb.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        phone: ['', Validators.required],
      }),  
      languages: this.fb.array([])
    });

    this.studiesForm = this.fb.group({
      name: ['', Validators.required],
      studies: this.fb.array([])
    });
  }

  get PersonalData(){
    return this.contactForm.get('personalData') as FormGroup;
  }

  //LANGUAGES
  // Obtiene el campo languages del contactForm y lo devuelve como un FormArray
  get languages(){
    return this.contactForm.get('languages') as FormArray;
  }
  
  addLanguage(){
    this.languages.push(this.fb.control('', Validators.required));
  }

  removeLanguage(i: number){
    this.languages.removeAt(i);
  }


  onSubmit(){
    if(this.contactForm.invalid){
      alert("formulario invalido");
    }
    console.log(this.contactForm.value);
  }
  

  //STUDIES
  createStudyForm(){
    return this.fb.group({
      level: [''],
      description: ['']
    });
  }
  
  get studies(){
    return this.studiesForm.get('studies') as FormArray;
  }

  addStudy(){
    this.studies.push(this.createStudyForm());
  }

  removeStudy(i: number){
    this.studies.removeAt(i);
    console.log(i);
  }

  onStudiesSubmit(){
    console.log(this.studiesForm.value);
  } 


}
