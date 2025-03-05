import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-prueba1',
  imports: [ReactiveFormsModule],
  templateUrl: './form-prueba1.component.html',
  styleUrl: './form-prueba1.component.scss'
})
export class FormPrueba1Component {
  @Input() personalData!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    
  }
}
