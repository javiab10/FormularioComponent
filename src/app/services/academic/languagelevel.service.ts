import { Injectable } from '@angular/core';
import { LanguageLevel } from '../../model/academic/language-level';

@Injectable({
  providedIn: 'root'
})
export class LanguagelevelService {
  languageLevelList: LanguageLevel[] = [
    new LanguageLevel (1, 'Nativo'),
    new LanguageLevel (2, 'A1'),
    new LanguageLevel (3, 'A2'),
    new LanguageLevel (4, 'B1'),
    new LanguageLevel (5, 'B2'),
    new LanguageLevel (6, 'C1'),
    new LanguageLevel (7, 'C2')
  ]

  constructor() { }

  getAllLanguageLevels(): LanguageLevel[] {
    return this.languageLevelList;
  }

  getLanguageLevelById(idLanguageLevel: number): LanguageLevel | undefined {
    return this.languageLevelList.find(c => c.getId() === Number(idLanguageLevel));
  }
}
