import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ChangeidNameService {

  constructor( private fs :AngularFirestore) {}





  change(){ 

   return this.fs.collection('user').snapshotChanges().pipe( map(actions => actions.map(a => {
      let last = a.payload.doc.data()['last'] ;
      let first = a.payload.doc.data()['name'];
    
      let photo = a.payload.doc.data()['photoUrl'];
      const id = a.payload.doc.id;
      return { id, first,last ,photo};
    })))
  }
}

  /* 
this.ch.change().subscribe(l => { l.map(k => {
  for ( let i =0;i++;i<= (this.pub.length)) {  if (this.pub[i].id ==k.payload.doc.id && this.pub[i].id !==''){ this.pub[i].first=k.payload.doc.data()['name'];
  this.pub[i].last=k.payload.doc.data['last']}
console.log(this.pub[i])

}     }  )  }) */
