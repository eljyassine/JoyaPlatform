import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ServiceauthService } from 'src/app/services/serviceauth.service';
import { TransfereidService } from 'src/app/services/transfereid.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 id:string =''
 
  constructor(private as:ServiceauthService,private router :Router, private idt :TransfereidService ) { }

  ngOnInit(): void {
  }


  login(form){

    let data =form.value
    this.as.login(data.email,data.password)
    .then(result => {this.id=result.user.uid  ;this.router.navigate(['/']);
  
 
  })
    
  }

  //logout(){  this.as.logout().then (() =>/* this.router.navigate(['/']);*/
  /*  {;console.log('5rajtttttttt',this.id) })}*/
 
}
