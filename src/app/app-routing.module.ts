import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TranscationComponent } from './transcation/transcation.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  }, {
    path: '', component: LoginComponent
  }, {
    path: 'register', component: RegisterComponent
  }, {
    path: 'transcation', component: TranscationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
