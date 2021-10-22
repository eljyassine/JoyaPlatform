import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ServicepubService {


  constructor(private fs:AngularFirestore) { }


  //ta3mel return lel datta mte3naa 
  
  getAllPubs(){
    return this.fs.collection('pub').snapshotChanges();
    
  }
  addNewPub(idp:string,titre:string,description:string,category:string,date:string){    
    return this.fs.doc('pub/'+idp).set({idp,titre,description ,category, date})       
  }

 
}
