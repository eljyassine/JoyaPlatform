import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServiceblogService {

  constructor(private fs:AngularFirestore) { }


//ta3mel return lel datta mte3naa 

getAllBlogs(){
  return this.fs.collection('blogs').snapshotChanges();
  
}



}
