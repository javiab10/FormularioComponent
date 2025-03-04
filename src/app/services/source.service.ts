import { Injectable } from '@angular/core';
import { Source } from '../model/source';

@Injectable({
  providedIn: 'root'
})
export class SourceService {
  sourceList: Source[] = [
    new Source(1, 'Linkedin'),
    new Source(2, 'InjoJobs'),
    new Source(3, 'Referido')
  ]

  constructor() { }

  getAllSources(): Source[] {
    return this.sourceList;
  }

  getSourceById(idSource: number): Source | undefined {
    return this.sourceList.find(c => c.getId() === Number(idSource));
  }
}
