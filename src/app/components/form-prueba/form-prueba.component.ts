import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AcademicLevel } from '../../model/academic/academic-level';
import { FormPrueba1Component } from '../form-prueba1/form-prueba1.component';


@Component({
  selector: 'app-form-prueba',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-prueba.component.html',
  styleUrl: './form-prueba.component.scss'
})

export class FormPruebaComponent {
  sections = [
    {id: 1, label: 'Datos Personales'}, 
    {id: 2, label: 'Datos Academicos'}, 
    {id: 3, label: 'Datos Profesionales'}, 
    {id: 4, label: 'Datos Generales'}
  ];

  currentSection: number = 1;

  changeSection(id: number): void {
    this.currentSection = id;
  }

  next(){
    if(this.currentSection < 4){
      this.currentSection++;
    }
  }

  prev(){
    if(this.currentSection > 1){
      this.currentSection--;
    }
  }



}
