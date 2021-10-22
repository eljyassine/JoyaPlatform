import {Pub} from 'src/app/interfaces/pub.interface';
import { ServicepubService } from 'src/app/services/servicepub.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import{NgForm} from '@angular/forms'
import { TransfereidService } from 'src/app/services/transfereid.service';
import { ChangeidNameService } from 'src/app/services/changeid-name.service';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common'
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit,OnDestroy {
 date :Date;
pub : Pub[] =[]


pubobservable:Subscription
iduser :string =''

     

  constructor(public datePipe: DatePipe,private bs: ServicepubService ,private idt :TransfereidService,private ch:ChangeidNameService) { 
   
    
    
   }

  ngOnInit() {
    this.pubobservable=this.bs.getAllPubs().subscribe (data => {
      this.pub =[]; 
      data.map(element =>               
        
        { this.ch.change().subscribe 
          (  (x =>{  let user : any  = x.filter( y => y.id === element.payload.doc.id); 

          let i : any = element.payload.doc.data();
          i.first =user[0].first;
          i.photo=user[0].photo;
           i.id =user[0].id;
          i.last=user[0].last;         
          this.pub.push(i)
          console.log('pubbbbbb',this.pub)
        



        }) 
         )
        }
        )
      })
        
            
      /*      {    
        
        
        
        if (element.payload.doc.id == x.id)
            
            {let i :any =element.payload.doc.data();
               i.first =x.first;
               i.id=element.payload.doc.id;
               i.last =x.last ;
               this.pub.push(i) }} ))
               
               (  (x =>{ console.log('tt',x); if ((element.payload.doc.id ) in x.id ) console.log("yaaaa",element.payload.doc.id)  })  )})})
               
               */

       
    
     
      this.idt.currentid.subscribe(message => this.iduser = message);
         }
       

        
      
   
            

 ngOnDestroy(){
this.pubobservable.unsubscribe()
 }


addpub(form:NgForm){
  let data : Pub= form.value 
 

  this.date=new Date();
  // let latest_date =this.datepipe.transform(this.date, 'yyyy-MM-dd');
  let datePipeString =this.datePipe.transform(Date.now(),'dd/MM/yyyy HH:mm');

  this.bs.addNewPub(this.iduser,data.titre,data.description,data.category,datePipeString)
  .then(e => {console.log(e) })
  .catch(err => {  console.log(err)})   

  }

  addcomment(form :NgForm){

console.log(form)

}

}
