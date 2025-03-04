import { Injectable } from '@angular/core';
import { AcademicLevel } from '../../model/academic/academic-level';

@Injectable({
  providedIn: 'root'
})
export class AcademicLevelService {
  academicLevelList: AcademicLevel[] = [
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

  constructor() { }

  getAllAcademicLevels(): AcademicLevel[] {
    return this.academicLevelList;
  }

  getAcademicLevelById(idAcademicLevel: number): AcademicLevel | undefined {
    return this.academicLevelList.find(c => c.getId() === Number(idAcademicLevel));
  }
}
