import { Injectable } from '@angular/core';
import { HiberusLevel } from '../model/hiberus-level';

@Injectable({
  providedIn: 'root'
})
export class HiberusLevelService {
  hiberusLevelList: HiberusLevel[] = [
      new HiberusLevel (1, '1. Final Boss'),
      new HiberusLevel (2, '2. Mega Boss'),
      new HiberusLevel (3, '3. Super Boss'),
      new HiberusLevel (4, '4. Boss'),
      new HiberusLevel (5, '5. Region Manager'),
      new HiberusLevel (6, '6. Desarrollador Senior'),
      new HiberusLevel (7, '7. Desarrollador Middle'),
      new HiberusLevel (8, '8. Desarrollador Junior'),
      new HiberusLevel (9, '9. Estudiante en prácticas'),
    ]

  constructor() { }

  getAllHiberusLevels(): HiberusLevel[] {
    return this.hiberusLevelList;
  }
}
