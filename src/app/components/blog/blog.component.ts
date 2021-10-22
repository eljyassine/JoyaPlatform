import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Blog } from 'src/app/interfaces/blog.interface';
import { ServiceblogService } from 'src/app/services/serviceblog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit ,OnDestroy{

blog: Blog[]  = [];
blogobservable:Subscription

     

  constructor(private bs: ServiceblogService) { 
   
    
    
   }

  ngOnInit() {
    this.blogobservable=this.bs.getAllBlogs().subscribe (data => {
      this.blog =[];data.map(element => {
        let i :any =element.payload.doc.data();
        i.id=element.payload.doc.id;
        this.blog.push(i);
         })
         }
        )
         }



 ngOnDestroy(){
this.blogobservable.unsubscribe()
 }

 
 
 
} 


