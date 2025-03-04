import { Injectable } from '@angular/core';
import { Technology } from '../model/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  technologyList: Technology[] = [
    new Technology (1, 'Java'),
    new Technology (2, 'Python'),
    new Technology (3, 'C++'),
    new Technology (4, 'C#'),
    new Technology (5, 'JavaScript'),
    new Technology (6, 'PHP'),
    new Technology (7, 'Angular'),
    new Technology (8, 'React'),
    new Technology (9, '.NET Framework'),
    new Technology (10, 'Spring')    
  ];

  constructor() { }

  getAllTechnologies(): Technology[] {
    return this.technologyList;
  }

  getTechnologyById(idTechnology: number): Technology | undefined {
    return this.technologyList.find(c => c.getId() === Number(idTechnology));
  }
}
