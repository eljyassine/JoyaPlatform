import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceauthService {

user:Observable<any>
userId :string =''

  constructor(private afauth:AngularFireAuth) { 
    this.user = afauth.user
  }

signup(email,password)
{ return this.afauth.createUserWithEmailAndPassword(email,password)}

login(email,password){
return this.afauth.signInWithEmailAndPassword(email,password )
    
}
logout(){
  return this.afauth.signOut()

}


}
