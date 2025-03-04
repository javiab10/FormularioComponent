import { Injectable } from '@angular/core';
import { Ccaa } from '../../model/location/ccaa';

@Injectable({
  providedIn: 'root'
})
export class CcaaService {
  ccaaList: Ccaa[] = [
    new Ccaa (1, 'Andalucía'),
    new Ccaa (2, 'Aragón'),
    new Ccaa (3, 'Asturias'),
    new Ccaa (4, 'Baleares'),
    new Ccaa (5, 'Canarias'),
    new Ccaa (6, 'Cantabria'),
    new Ccaa (7, 'Castilla-La Mancha'),
    new Ccaa (8, 'Castilla y León'),
    new Ccaa (9, 'Cataluña'),
    new Ccaa (10, 'Comunidad Valenciana'),
    new Ccaa (11, 'Extremadura'),
    new Ccaa (12, 'Galicia'),
    new Ccaa (13, 'La Rioja'),
    new Ccaa (14, 'Madrid'),
    new Ccaa (15, 'Murcia'),
    new Ccaa (16, 'Navarra'),
    new Ccaa (17, 'Pais Vasco'),
   
  ]

  constructor() { }

  getAllCcaa(): Ccaa[] {
    return this.ccaaList;
  }

  getCcaaById(idCcaa: number): Ccaa | undefined{
    return this.ccaaList.find(c => c.getId() === Number(idCcaa));
  }
}
