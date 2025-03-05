import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DividedFormPersonalComponent } from '../divided-form-personal/divided-form-personal.component';
import { DividedFormAcademicComponent } from '../divided-form-academic/divided-form-academic.component';
import { DividedFormProfesionalComponent } from '../divided-form-profesional/divided-form-profesional.component';
import { DividedFormGeneralComponent } from '../divided-form-general/divided-form-general.component';

@Component({
  selector: 'app-divided-form',
  imports: [ReactiveFormsModule, FormsModule, DividedFormPersonalComponent, DividedFormAcademicComponent, DividedFormProfesionalComponent, DividedFormGeneralComponent],
  templateUrl: './divided-form.component.html',
  styleUrl: './divided-form.component.scss'
})
export class DividedFormComponent {
  sections = [
    {id: 1, label: 'Datos Personales'}, 
    {id: 2, label: 'Datos Academicos'}, 
    {id: 3, label: 'Datos Profesionales'}, 
    {id: 4, label: 'Datos Generales'}
  ];

  selectedSection: number = 1;

  form!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      personalData: this.fb.group({
        name: new FormControl('', Validators.required),
        surname: new FormControl('', Validators.required),
        phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(9), Validators.maxLength(9)]),
        email: new FormControl('', Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')),
        country: new FormControl('País'),
        ccaa: new FormControl('CCAA'), //Agruparlos??
        province: new FormControl('Provincia'),
        place: new FormControl(''),
      }),   
      academicData: this.fb.group({
        educations: this.fb.array([]),
        languages: this.fb.array([]),
      }),
      profesionalData: this.fb.group({
        workExperiences: this.fb.array([]),
      }),
      generalData: this.fb.group({
        minSalary: new FormControl('24000', Validators.min(15876)),
        maxSalary: new FormControl('24000', Validators.min(15876)),
        technologies: new FormControl(''),
        source: new FormControl(''),
        state: new FormControl(''),
      }),
    });
  }

  onChoose(id: number): void {
    this.selectedSection = id;
  }

  get PersonalData(): FormGroup {
    return this.form.get('personalData') as FormGroup;
  }

  get AcademicData(): FormGroup {
    return this.form.get('academicData') as FormGroup;
  }

  get ProfesionalData(): FormGroup {
    return this.form.get('profesionalData') as FormGroup;
  }

  get GeneralData(): FormGroup {
    return this.form.get('generalData') as FormGroup;
  }

  onSubmit(){
    if(this.form.invalid){
      alert("formulario invalido");
      return;
    }
    console.log(this.form.value);
  }

}
