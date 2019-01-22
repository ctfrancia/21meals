import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent},
    { path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  })

export class AppRoutingModule {}
