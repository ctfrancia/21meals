import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard'


const routes: Routes = [
    // { path: 'signup', component: SignupComponent },
    { path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
    },
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
