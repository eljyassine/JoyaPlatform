import { Component, OnInit } from '@angular/core';
import { ServiceauthService } from 'src/app/services/serviceauth.service';
import { ServiceyserService } from 'src/app/services/serviceyser.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { Router } from '@angular/router';
import { TransfereidService } from 'src/app/services/transfereid.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  idd:string=''
  isUser :boolean =false
  img:string  

  idchange:string =''
  userobservable:Subscription
  constructor(private as :ServiceauthService,private us:ServiceyserService,private router:Router,private idt:TransfereidService) {
    this.as.user.subscribe(user =>{  
      if(user) {this.isUser=true
        this.idd=user.uid
        this.idchange=user.uid        //yajim ikoun el id change2 zeyeed just ena bech menhlekch el denya
        this.idt.changeid(this.idchange)
        console.log("idddddddddddddddddddddd",this.idd)
      this.as.userId=user.uid
    
      this.userobservable=this.us.getuser().subscribe (data => {
        this.profil=[];
        data.map(element => {
          let i :any =element.payload.doc.data();
          i.id=element.payload.doc.id;
          console.log(i);
          if(i.id==this.idd){ 
            console.log("yyyyyyyyyyyy",i);
            this.profil.push(i);
            console.log(this.profil)
          }})})
    
    
    
    
    
    }
      else {this.isUser=false
        this.as.userId= ''}
      })
   }
  profil: User[] = []

  ngOnInit() {




}

  

logout(){  this.as.logout().then (() => {this.idchange='';this.idt.changeid(this.idchange)}) 
this.userobservable.unsubscribe()
 }
}





