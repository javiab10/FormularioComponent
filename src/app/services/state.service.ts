import { Injectable } from '@angular/core';
import { State } from '../model/state';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  stateList: State[] = [
    new State(1, 'Talento'),
    new State(2, 'T+Tech'),
    new State(3, 'Llamada')
  ];

  constructor() { }

  getAllStates(): State[] {
    return this.stateList;
  }

  getStateById(idState: number): State | undefined {
    return this.stateList.find(c => c.getId() === Number(idState));
  }
}
