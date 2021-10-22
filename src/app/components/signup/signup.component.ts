import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { ServiceauthService } from 'src/app/services/serviceauth.service';
import { ServiceyserService } from 'src/app/services/serviceyser.service';
import{NgForm}from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

errorMessage :string =''
// photo :string ="https://image.flaticon.com/icons/png/512/64/64572.png"
@ViewChild ('photo1') photo :ElementRef

  constructor(private as:ServiceauthService,private us:ServiceyserService,private router:Router) { }

  ngOnInit(): void {
  }


  singupf(form:NgForm){
    
  let data : User= form.value
  this.as.signup(data.email,data.password)
  .then(info => {
    this.errorMessage ='' ;
    let photoo = (<HTMLInputElement>this.photo.nativeElement).files[0]
    this.us.addNewUser(info.user.uid,data.firstname,data.lastname,data.email,photoo).then(()=> {
    this.router.navigate(['/'])
    })})
  .catch(err => {
    this.errorMessage =err.message
  })}

 




}
