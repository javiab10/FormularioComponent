import { Injectable } from '@angular/core';
import { Province } from '../../model/location/province';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  provinceList: Province[] = [
    new Province(1, 1, 'Almería'),
    new Province(2, 1, 'Cádiz'),
    new Province(3, 1, 'Córdoba'),
    new Province(4, 1, 'Granada'),
    new Province(5, 1, 'Huelva'),
    new Province(6, 1, 'Jaén'),
    new Province(7, 1, 'Málaga'),
    new Province(8, 1, 'Sevilla'),
    
    new Province(9, 2, 'Huesca'),
    new Province(10, 2, 'Teruel'),
    new Province(11, 2, 'Zaragoza'),

    new Province(12, 3, 'Asturias'),

    new Province(13, 4, 'Baleares'),

    new Province(14, 5, 'Las Palmas'),
    new Province(15, 5, 'Santa Cruz de Tenerife'),

    new Province(16, 6, 'Cantabria'),

    new Province(26, 7, 'Albacete'),
    new Province(27, 7, 'Ciudad Real'),
    new Province(28, 7, 'Cuenca'),
    new Province(29, 7, 'Guadalajara'),
    new Province(30, 7, 'Toledo'),

    new Province(17, 8, 'Ávila'),
    new Province(18, 8, 'Burgos'),
    new Province(19, 8, 'León'),
    new Province(20, 8, 'Palencia'),
    new Province(21, 8, 'Salamanca'),
    new Province(22, 8, 'Segovia'),
    new Province(23, 8, 'Soria'),
    new Province(24, 8, 'Valladolid'),
    new Province(25, 8, 'Zamora'),

    new Province(31, 9, 'Barcelona'),
    new Province(32, 9, 'Girona'),
    new Province(33, 9, 'Lleida'),
    new Province(34, 9, 'Tarragona'),

    new Province(35, 10, 'Alicante'),
    new Province(36, 10, 'Castellón'),
    new Province(37, 10, 'Valencia'),

    new Province(38, 11, 'Badajoz'),
    new Province(39, 11, 'Cáceres'),

    new Province(40, 12, 'A Coruña'),
    new Province(41, 12, 'Lugo'),
    new Province(42, 12, 'Ourense'),
    new Province(43, 12, 'Pontevedra'),

    new Province(44, 13, 'La Rioja'),

    new Province(45, 14, 'Madrid'),

    new Province(46, 15, 'Murcia'),

    new Province(47, 16, 'Navarra'),

    new Province(48, 17, 'Bizkaia'),
    new Province(49, 17, 'Gipuzkoa'),
    new Province(50, 17, 'Araba')
  ];

  constructor() { }

  getAllProvinces(): Province[]{
    return this.provinceList;
  }

  getProvinceById(idProvince: number): Province | undefined{
        return this.provinceList.find(c => c.getId() === Number(idProvince));
  }

  getProvinceByCaa(idCaa: number): Province[]{
    return this.getAllProvinces().filter(p => p.getIdCaa() === idCaa);
  }
  
}
