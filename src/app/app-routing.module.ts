import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './components/faq/faq.component';
import { BlogComponent } from './components/blog/blog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ForumComponent } from './components/forum/forum.component';
//import { NotfoundComponent } from './components/notfound/notfound.component';
import{ LoginComponent } from './components/login/login.component';
import{ SignupComponent } from './components/signup/signup.component';
const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'forum', component:ForumComponent}
  /*{path: **, component:NotfoundComponent}*/
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }



