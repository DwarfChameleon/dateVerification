import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { VerifyComponent } from './verify/verify.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full'},
  {path:'form', component:FormComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'greetings', component: GreetingsComponent, canActivate: [AuthGuard]},
  {path: 'verify', component: VerifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
