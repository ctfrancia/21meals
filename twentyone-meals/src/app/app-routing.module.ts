import { RecipesDownloadedComponent } from './recipes-downloaded/recipes-downloaded.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard'


const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'download', component: RecipesDownloadedComponent },
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
