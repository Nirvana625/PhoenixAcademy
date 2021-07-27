import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsComponent } from './details/details.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { DataComponent } from './data/data.component';
import { AuthgaurdGuard } from './authgaurd.guard';
import { CreditsComponent } from './credits/credits.component';
import { DefaultComponent } from './default/default.component';
const routes: Routes = [
  {path:'',redirectTo:'phoenix',pathMatch:'full'},
  {path:'phoenix',component:DefaultComponent},
  {path:'data', component:DataComponent, canActivate:[AuthgaurdGuard]},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'details',component:DetailsComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'logIn', component:LoginComponent},
  {path:'credits', component:CreditsComponent},
  {path:'profile',component:ProfileComponent, canActivate:[AuthgaurdGuard]}
];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
