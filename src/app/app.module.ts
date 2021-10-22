import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BlogComponent } from './components/blog/blog.component';
import { FaqComponent } from './components/faq/faq.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { ForumComponent } from './components/forum/forum.component';
//import { environment } from 'src/environments/environment';
import{AngularFireStorageModule} from '@angular/fire/storage'
  import { from } from 'rxjs';
  import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AboutusComponent,
    BlogComponent,
    FaqComponent,
    NavbarComponent,
    NotfoundComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    SignupComponent,
    ForumComponent,
  
  ],
  imports: [FormsModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    AngularFireStorageModule,
    
     AngularFireModule.initializeApp({    apiKey: "AIzaSyCOx2jNAm7wX5PD252fOeE1drxJ8f3iesQ",
     authDomain: "joya-48b90.firebaseapp.com",
     databaseURL: "https://joya-48b90.firebaseio.com",
     projectId: "joya-48b90",
     storageBucket: "joya-48b90.appspot.com",
     messagingSenderId: "1032279650795",
     appId: "1:1032279650795:web:726268013b9f8717c6a9ae",
     measurementId: "G-JS7YD52WC9"}),
     AngularFirestoreModule,AngularFireAuthModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
