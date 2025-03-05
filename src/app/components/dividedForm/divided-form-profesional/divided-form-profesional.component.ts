import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TechnologyService } from '../../../services/technology.service';
import { HiberusLevelService } from '../../../services/hiberus-level.service';
import { Technology } from '../../../model/technology';
import { HiberusLevel } from '../../../model/hiberus-level';

@Component({
  selector: 'app-divided-form-profesional',
  imports: [ReactiveFormsModule],
  templateUrl: './divided-form-profesional.component.html',
  styleUrl: './divided-form-profesional.component.scss'
})
export class DividedFormProfesionalComponent {
  @Input() profesionalDataForm!: FormGroup;

  technologyList!: Technology[];
  hiberusLevelList!: HiberusLevel[];

  toggleChecked: boolean = true;

  constructor(private fb: FormBuilder, private technologyService:TechnologyService, private hiberusLevelService: HiberusLevelService){}

  ngOnInit(){
    this.technologyList = this.technologyService.getAllTechnologies();
    this.hiberusLevelList = this.hiberusLevelService.getAllHiberusLevels();
  }

  //WORK EXPERIENCE
    get workExperiences(){
      return this.profesionalDataForm.get('workExperiences') as FormArray;
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

    toggle(){
      this.toggleChecked = !this.toggleChecked;
    }
}
