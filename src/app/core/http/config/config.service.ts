import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public tables: any = { 
    boards: 'board',
    comments: 'comments'
  }

  constructor() { }
}
