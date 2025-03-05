import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Source } from '../../../model/source';
import { State } from '../../../model/state';
import { SourceService } from '../../../services/source.service';
import { StateService } from '../../../services/state.service';
import { TechnologyService } from '../../../services/technology.service';
import { Technology } from '../../../model/technology';

@Component({
  selector: 'app-divided-form-general',
  imports: [ReactiveFormsModule],
  templateUrl: './divided-form-general.component.html',
  styleUrl: './divided-form-general.component.scss'
})
export class DividedFormGeneralComponent {
  @Input() generalDataForm!: FormGroup;

  technologyList!: Technology[];
  sourceList!: Source[];
  stateList!: State[];

  constructor(private technologyService: TechnologyService, private sourceService: SourceService, private stateService: StateService){}

  ngOnInit(): void {
    this.technologyList = this.technologyService.getAllTechnologies();
    this.sourceList = this.sourceService.getAllSources();
    this.stateList = this.stateService.getAllStates();
  }
}
