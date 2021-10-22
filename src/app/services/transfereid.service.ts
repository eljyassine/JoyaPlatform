import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransfereidService {
  private id = new BehaviorSubject('');
  currentid = this.id.asObservable();

  constructor() { }

  changeid(info: string) {
    this.id.next(info)
  }



  
}



