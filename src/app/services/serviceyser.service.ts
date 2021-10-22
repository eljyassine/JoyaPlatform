import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ServiceyserService {

  constructor(private fs :AngularFirestore ,private storage:AngularFireStorage) { }


  addNewUser(id:string,name:string,last:string , adresse:string,photo:File){
    return new Promise((resolve,reject)  => {           

    let ref = this.storage.ref('/photoprofil/'+photo.name)
ref.put(photo).then(()=> {

  ref.getDownloadURL().subscribe(photoUrl  => {
     this.fs.doc('user/'+id).set({
      name,last,adresse,photoUrl
    }).then (()  => resolve('hello'))
  })
})
})
  }

    
  getuser(){
    return this.fs.collection('user').snapshotChanges();
   }

}
 /*  return this.fs.doc('user/'+id).set({
      name,last,adresse,photo
    })*/


